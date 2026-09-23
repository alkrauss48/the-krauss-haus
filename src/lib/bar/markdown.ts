/**
 * A deliberately small Markdown tokenizer for the subset the ask-eddie API actually emits:
 * paragraphs, `**bold**`, `_italic_`, `` `code` ``, `#` headings, `-`/`1.` lists, and
 * `[label](href)` links.
 *
 * It exists because the integration doc's "render as plain text with pre-wrap" rule was
 * written before anyone looked at the wire — the answers are markdown, and rendering them
 * literally shows guests raw asterisks and link syntax. It emits an AST rather than a string
 * so the renderer never goes near `@html`: every leaf reaches the DOM as escaped text.
 *
 * The `partial` option is what keeps a stream from flickering. Deltas arrive one to four
 * characters at a time, so a half-typed `**bol` would otherwise render as literal asterisks
 * for a frame and then snap into bold. With `partial`, an unterminated marker at the very end
 * of the input opens a node instead of degrading, and the text simply grows inside it.
 */

export type MdInline =
	| { kind: 'text'; value: string }
	| { kind: 'strong'; children: MdInline[]; open?: boolean }
	| { kind: 'em'; children: MdInline[]; open?: boolean }
	| { kind: 'code'; value: string; open?: boolean }
	| { kind: 'link'; href: string | null; children: MdInline[]; partial?: boolean }
	| { kind: 'caret' };

export type MdBlock =
	| { kind: 'paragraph'; children: MdInline[] }
	| { kind: 'heading'; depth: 1 | 2 | 3 | 4 | 5 | 6; children: MdInline[] }
	| { kind: 'list'; ordered: boolean; start: number; items: MdInline[][] };

export type ParseOptions = {
	/** Treat the input as a prefix: unterminated trailing markers open a node. */
	partial?: boolean;
	/** Append exactly one caret node after the last leaf. Implies `partial`. */
	caret?: boolean;
};

const HEADING = /^(#{1,6})\s+(.*)$/;
const PARTIAL_HEADING = /^#{1,6}\s*$/;
const BULLET = /^\s*[-*]\s+(.*)$/;
const PARTIAL_BULLET = /^\s*[-*]\s*$/;
const ORDERED = /^\s*(\d+)[.)]\s+(.*)$/;
const PARTIAL_ORDERED = /^\s*\d+[.)]\s*$/;
const BARE_URL = /^https?:\/\/[^\s<>()[\]]+/;
const LINK = /^\[([^\]]*)\]\(\s*([^)\s]*)\s*\)/;

export function parseMarkdown(src: string, options: ParseOptions = {}): MdBlock[] {
	const caret = options.caret === true;
	const partial = caret || options.partial === true;

	const blocks = toBlocks(src, partial);
	if (caret) appendCaret(blocks);
	return blocks;
}

/** Flattens an AST back to prose — for the aria-live announcement, which must not read "**". */
export function plainText(blocks: MdBlock[]): string {
	return blocks
		.map((block) => {
			if (block.kind === 'list') {
				return block.items.map((item) => inlineText(item)).join('\n');
			}
			return inlineText(block.children);
		})
		.filter((line) => line !== '')
		.join('\n\n');
}

function inlineText(nodes: MdInline[]): string {
	let out = '';
	for (const node of nodes) {
		switch (node.kind) {
			case 'text':
				out += node.value;
				break;
			case 'code':
				out += node.value;
				break;
			case 'caret':
				break;
			default:
				out += inlineText(node.children);
		}
	}
	return out;
}

/* ------------------------------------------------------------------ blocks */

type RawBlock =
	| { kind: 'paragraph'; lines: string[] }
	| { kind: 'heading'; depth: number; text: string }
	| { kind: 'list'; ordered: boolean; start: number; items: string[] };

function toBlocks(src: string, partial: boolean): MdBlock[] {
	const lines = src.split(/\r?\n/);
	const raw: RawBlock[] = [];

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const last = raw[raw.length - 1];
		const isFinalLine = i === lines.length - 1;

		if (line.trim() === '') continue;

		const heading = HEADING.exec(line);
		if (heading) {
			raw.push({ kind: 'heading', depth: heading[1].length, text: heading[2] });
			continue;
		}

		// `###` with nothing after it yet: a heading being typed, not a paragraph of hashes.
		if (partial && isFinalLine && PARTIAL_HEADING.test(line)) {
			raw.push({ kind: 'heading', depth: line.trim().length, text: '' });
			continue;
		}

		const bullet = BULLET.exec(line);
		if (bullet) {
			if (last?.kind === 'list' && !last.ordered) last.items.push(bullet[1]);
			else raw.push({ kind: 'list', ordered: false, start: 1, items: [bullet[1]] });
			continue;
		}

		const ordered = ORDERED.exec(line);
		if (ordered) {
			if (last?.kind === 'list' && last.ordered) last.items.push(ordered[2]);
			else
				raw.push({
					kind: 'list',
					ordered: true,
					start: Number(ordered[1]),
					items: [ordered[2]]
				});
			continue;
		}

		if (partial && isFinalLine && (PARTIAL_BULLET.test(line) || PARTIAL_ORDERED.test(line))) {
			const isOrdered = PARTIAL_ORDERED.test(line);
			if (last?.kind === 'list' && last.ordered === isOrdered) last.items.push('');
			else
				raw.push({
					kind: 'list',
					ordered: isOrdered,
					start: isOrdered ? Number(/\d+/.exec(line)?.[0] ?? 1) : 1,
					items: ['']
				});
			continue;
		}

		// A blank line ended the previous block, so only an immediately preceding paragraph
		// line continues one. `lines[i - 1]` being non-empty is exactly that test.
		if (last?.kind === 'paragraph' && i > 0 && lines[i - 1].trim() !== '') {
			last.lines.push(line);
		} else {
			raw.push({ kind: 'paragraph', lines: [line] });
		}
	}

	return raw.map((block, index) => {
		const tail = partial && index === raw.length - 1;
		if (block.kind === 'heading') {
			return {
				kind: 'heading',
				depth: Math.min(6, Math.max(1, block.depth)) as 1 | 2 | 3 | 4 | 5 | 6,
				children: parseInline(block.text, tail)
			};
		}
		if (block.kind === 'list') {
			return {
				kind: 'list',
				ordered: block.ordered,
				start: block.start,
				items: block.items.map((item, i) => parseInline(item, tail && i === block.items.length - 1))
			};
		}
		return { kind: 'paragraph', children: parseInline(block.lines.join('\n'), tail) };
	});
}

/* ------------------------------------------------------------------ inline */

function parseInline(src: string, partial: boolean): MdInline[] {
	const out: MdInline[] = [];
	let text = '';

	const flush = () => {
		if (text !== '') {
			out.push({ kind: 'text', value: text });
			text = '';
		}
	};

	let i = 0;
	while (i < src.length) {
		const rest = src.slice(i);

		// A marker alone at the very end of a partial stream is the first half of something:
		// `*` about to become `**`, a `[` about to become a link. Swallow it for the one frame
		// it takes the next character to arrive — showing it is exactly the flicker we are
		// here to avoid.
		if (partial && rest.length === 1 && '*_`[\\'.includes(rest)) {
			break;
		}

		// Escapes come first so `\*` never opens emphasis.
		if (rest.startsWith('\\') && rest.length > 1) {
			text += rest[1];
			i += 2;
			continue;
		}

		if (rest.startsWith('`')) {
			const end = rest.indexOf('`', 1);
			if (end !== -1) {
				flush();
				out.push({ kind: 'code', value: rest.slice(1, end) });
				i += end + 1;
				continue;
			}
			if (partial) {
				flush();
				out.push({ kind: 'code', value: rest.slice(1), open: true });
				return out;
			}
		}

		if (rest.startsWith('**')) {
			const end = rest.indexOf('**', 2);
			if (end !== -1) {
				flush();
				out.push({ kind: 'strong', children: parseInline(rest.slice(2, end), false) });
				i += end + 2;
				continue;
			}
			if (partial) {
				flush();
				out.push({ kind: 'strong', children: parseInline(rest.slice(2), true), open: true });
				return out;
			}
		}

		const emphasis = rest[0] === '_' || rest[0] === '*';
		if (emphasis) {
			const marker = rest[0];
			const end = rest.indexOf(marker, 1);
			// An empty `__` is not emphasis, and neither is a lone underscore mid-word.
			if (end > 1) {
				flush();
				out.push({ kind: 'em', children: parseInline(rest.slice(1, end), false) });
				i += end + 1;
				continue;
			}
			if (partial && end === -1 && rest.length > 1) {
				flush();
				out.push({ kind: 'em', children: parseInline(rest.slice(1), true), open: true });
				return out;
			}
		}

		if (rest.startsWith('[')) {
			const link = LINK.exec(rest);
			if (link) {
				flush();
				out.push({ kind: 'link', href: link[2], children: parseInline(link[1], false) });
				i += link[0].length;
				continue;
			}
			if (partial) {
				// Render the label in place with no href, so nothing is clickable until the
				// closing paren lands and the text does not jump when it does.
				const close = rest.indexOf(']');
				const label = close === -1 ? rest.slice(1) : rest.slice(1, close);
				flush();
				out.push({ kind: 'link', href: null, children: parseInline(label, false), partial: true });
				return out;
			}
		}

		const bare = BARE_URL.exec(rest);
		if (bare) {
			// A URL still growing at the end of a partial stream is left as text: linking it
			// early means the href churns on every delta and points somewhere truncated.
			const stillGrowing = partial && bare[0].length === rest.length;
			if (!stillGrowing) {
				flush();
				out.push({ kind: 'link', href: bare[0], children: [{ kind: 'text', value: bare[0] }] });
				i += bare[0].length;
				continue;
			}
		}

		text += src[i];
		i += 1;
	}

	flush();
	return out;
}

/* ------------------------------------------------------------------- caret */

/**
 * The caret is an AST node rather than a sibling element so it lands *inside* an open bold
 * run and inside the `<li>` of a bullet — where the next character will actually appear.
 */
function appendCaret(blocks: MdBlock[]): void {
	const block = blocks[blocks.length - 1];
	if (!block) {
		blocks.push({ kind: 'paragraph', children: [{ kind: 'caret' }] });
		return;
	}
	if (block.kind === 'list') {
		const item = block.items[block.items.length - 1];
		if (item) descend(item);
		else block.items.push([{ kind: 'caret' }]);
		return;
	}
	descend(block.children);
}

function descend(nodes: MdInline[]): void {
	const last = nodes[nodes.length - 1];
	if (last && (last.kind === 'strong' || last.kind === 'em' || last.kind === 'link')) {
		descend(last.children);
		return;
	}
	nodes.push({ kind: 'caret' });
}
