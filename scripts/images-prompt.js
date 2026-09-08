#!/usr/bin/env node
/**
 * Builds a ChatGPT image-generation prompt for a single cocktail.
 *
 * The prompt template is read from the "Image Generation" section of README.md, and the selected
 * cocktail's fully resolved data (ingredients, tags, bartender, etc.) is appended as JSON.
 *
 * Usage:
 *   npm run images:prompt              # interactive, type-to-search picker
 *   npm run images:prompt -- mai-tai   # skip the picker by passing a slug/title
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COCKTAILS_DIR = path.join(ROOT, 'src/lib/data/cocktails');
const README = path.join(ROOT, 'README.md');
const MAX_RESULTS = 10;

/** Everything the picker draws goes to stderr so stdout stays pipeable. */
const ui = (text) => process.stderr.write(text);

function fail(message) {
	ui(`\n${message}\n`);
	process.exit(1);
}

/**
 * Pulls the first fenced code block out of the README's "## Image Generation" section.
 */
function readPromptTemplate() {
	const readme = fs.readFileSync(README, 'utf8');
	const section = readme.split(/^##\s+Image Generation\s*$/m)[1];

	if (!section) {
		fail('Could not find an "## Image Generation" section in README.md.');
	}

	const block = section.match(/^```[^\n]*\n([\s\S]*?)^```\s*$/m);

	if (!block) {
		fail('Could not find a fenced prompt block in the README\'s "Image Generation" section.');
	}

	return block[1].trim();
}

/**
 * Lists every cocktail file with the title declared inside it, for searching and display.
 */
function readCocktails() {
	return fs
		.readdirSync(COCKTAILS_DIR)
		.filter((file) => file.endsWith('.ts') && !file.endsWith('.test.ts'))
		.map((file) => {
			const slug = file.replace(/\.ts$/, '');
			const contents = fs.readFileSync(path.join(COCKTAILS_DIR, file), 'utf8');
			// Titles containing an apostrophe are written with double quotes, so match either.
			const title = contents.match(/^\ttitle: (?:'([^']*)'|"([^"]*)")/m);

			return {
				slug,
				file,
				title: title ? (title[1] ?? title[2]) : slug
			};
		})
		.sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Scores a cocktail against a query: exact and prefix matches beat substrings, which beat
 * subsequence ("fuzzy") matches. Returns null when the query doesn't match at all.
 */
function score(query, cocktail) {
	const needle = query.toLowerCase();
	const haystack = `${cocktail.title} ${cocktail.slug}`.toLowerCase();

	if (!needle) return 0;
	if (cocktail.title.toLowerCase() === needle || cocktail.slug === needle) return 0;

	const index = haystack.indexOf(needle);

	if (index === 0) return 1;
	if (index > 0) return 2 + index / 100;

	// Subsequence match, e.g. "mtai" -> "Mai Tai". Prefer matches that sit on word boundaries and
	// span less of the name.
	let cursor = 0;
	let start = -1;
	let boundaries = 0;

	for (const char of needle) {
		const at = haystack.indexOf(char, cursor);

		if (at === -1) return null;
		if (start === -1) start = at;
		if (at === 0 || /[\s-]/.test(haystack[at - 1])) boundaries += 1;

		cursor = at + 1;
	}

	return 100 - boundaries * 10 + (cursor - start) / 100;
}

function search(cocktails, query) {
	return (
		cocktails
			.map((cocktail) => ({ cocktail, rank: score(query, cocktail) }))
			.filter((result) => result.rank !== null)
			// Equal ranks favor the shorter name, so "Mai Tai" beats "Aulani Tropical Mai Tai".
			.sort((a, b) => a.rank - b.rank || a.cocktail.title.length - b.cocktail.title.length)
			.map((result) => result.cocktail)
	);
}

/**
 * Type-to-search picker. Resolves with the chosen cocktail, or exits on ctrl-c / escape.
 */
function pick(cocktails) {
	if (!process.stdin.isTTY) {
		fail('No TTY available. Pass a cocktail slug instead: npm run images:prompt -- mai-tai');
	}

	return new Promise((resolve) => {
		let query = '';
		let selected = 0;
		let lines = 0;

		const render = () => {
			if (lines > 0) ui(`\x1b[${lines}A\x1b[0J`);

			const matches = search(cocktails, query);
			const visible = matches.slice(0, MAX_RESULTS);
			const out = [`\x1b[1mSearch cocktails\x1b[0m (↑/↓ to move, enter to select, esc to quit)`];

			out.push(`> ${query}`);

			if (visible.length === 0) {
				out.push('  \x1b[2mno matches\x1b[0m');
			}

			visible.forEach((cocktail, index) => {
				const marker = index === selected ? '\x1b[36m❯\x1b[0m' : ' ';
				const title = index === selected ? `\x1b[36m${cocktail.title}\x1b[0m` : cocktail.title;

				out.push(`${marker} ${title} \x1b[2m(${cocktail.slug})\x1b[0m`);
			});

			if (matches.length > visible.length) {
				out.push(`  \x1b[2m…and ${matches.length - visible.length} more\x1b[0m`);
			}

			lines = out.length;
			ui(`${out.join('\n')}\n`);

			return visible;
		};

		const stop = () => {
			process.stdin.setRawMode(false);
			process.stdin.pause();
			process.stdin.removeListener('keypress', onKeypress);
		};

		const onKeypress = (char, key) => {
			const visible = search(cocktails, query).slice(0, MAX_RESULTS);

			if (key.name === 'return' || key.name === 'enter') {
				if (!visible[selected]) return;

				stop();
				render();

				return resolve(visible[selected]);
			}

			if ((key.ctrl && key.name === 'c') || key.name === 'escape') {
				stop();
				ui('\nCancelled.\n');

				return process.exit(130);
			}

			if (key.name === 'up') {
				selected = Math.max(0, selected - 1);
			} else if (key.name === 'down') {
				selected = Math.min(Math.max(visible.length - 1, 0), selected + 1);
			} else if (key.name === 'backspace') {
				query = query.slice(0, -1);
				selected = 0;
			} else if (char && !key.ctrl && !key.meta && char >= ' ') {
				query += char;
				selected = 0;
			} else {
				return;
			}

			render();
		};

		readline.emitKeypressEvents(process.stdin);
		process.stdin.setRawMode(true);
		process.stdin.resume();
		process.stdin.on('keypress', onKeypress);
		render();
	});
}

/**
 * Loads a cocktail module through Vite so `$lib` imports, enums, and shared ingredient/tag objects
 * all resolve into a single plain object.
 */
async function loadCocktail(file) {
	// Vite and its deps log straight to the console; keep that off stdout.
	const log = console.log;
	console.log = (...args) => console.error(...args);

	try {
		const { createServer } = await import('vite');
		const server = await createServer({
			root: ROOT,
			configFile: false,
			logLevel: 'silent',
			server: { middlewareMode: true, hmr: false },
			resolve: { alias: { $lib: path.join(ROOT, 'src/lib') } }
		});

		try {
			const module = await server.ssrLoadModule(`/src/lib/data/cocktails/${file}`);

			return module.default;
		} finally {
			await server.close();
		}
	} finally {
		console.log = log;
	}
}

const cocktails = readCocktails();
const requested = process.argv.slice(2).join(' ').trim();
let cocktail;

if (requested) {
	cocktail = search(cocktails, requested)[0];

	if (!cocktail) fail(`No cocktail matched "${requested}".`);
} else {
	cocktail = await pick(cocktails);
}

ui(`\nBuilding prompt for \x1b[1m${cocktail.title}\x1b[0m…\n`);

const data = await loadCocktail(cocktail.file);

if (!data) fail(`${cocktail.file} has no default export.`);

/**
 * Drops fields that would only mislead an image generator: the CDN paths of the image we're about
 * to replace, and the UI colors attached to each tag's category.
 */
function forPrompt(cocktail) {
	const data = { ...cocktail };

	delete data.imagePath;
	delete data.thumbnailImagePath;

	if (data.tags) data.tags = data.tags.map((tag) => tag.label);

	return data;
}

const prompt = `${readPromptTemplate()}

## Cocktail Data

\`\`\`json
${JSON.stringify(forPrompt(data), null, 2)}
\`\`\`
`;

process.stdout.write(prompt);

// When stdout is a terminal there's nothing downstream to pipe into, so copy it for them.
if (process.stdout.isTTY && spawnSync('pbcopy', { input: prompt }).status === 0) {
	ui('\n\x1b[32mCopied to clipboard.\x1b[0m Paste it into ChatGPT.\n');
} else {
	ui('\nDone.\n');
}
