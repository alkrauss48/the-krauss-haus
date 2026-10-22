/**
 * Forgiving text search shared by the site-wide search and the cocktail table.
 *
 * A query is split into words and every word has to land somewhere, but a word no longer
 * has to appear verbatim. In order of how much it counts, a word can:
 *
 *  - start the title, or appear in it ("negro" → Negroni)
 *  - be an abbreviation of the title — its letters in order, starting at a word start, never
 *    skipping more than one letter inside a word but free to jump to the next word ("sips"
 *    → Sippin' Santa, "mrtin" → Martini)
 *  - be one typo away from a title word ("matrini" → Martini)
 *  - appear anywhere in the rest of the text (description, ingredients, tags…)
 *  - be an abbreviation of, or one typo away from, a single word in the rest of the text
 *
 * Accents and apostrophes are ignored on both sides, so "pina" finds Piña Verde and
 * "queens" finds Queen's Park Swizzle.
 */

export const SCORE = {
	TITLE_PREFIX: 100,
	TITLE_CONTAINS: 50,
	TITLE_FUZZY: 30,
	TITLE_TYPO: 20,
	TEXT_CONTAINS: 10,
	TEXT_FUZZY: 5
} as const;

/** Letters skipped inside a word before an abbreviation stops matching. */
const MAX_SKIP = 1;

/** Shorter query words are too ambiguous to match loosely; they must appear verbatim. */
const MIN_FUZZY_TITLE = 3;
const MIN_FUZZY_TEXT = 4;
const MIN_TYPO_TITLE = 4;
const MIN_TYPO_TEXT = 5;
const MIN_TYPO_PREFIX = 5;

const LETTER_FOLDS: Record<string, string> = { ø: 'o', æ: 'ae', œ: 'oe', ß: 'ss', ł: 'l' };

/** Lowercase, strip accents and apostrophes, and collapse any other punctuation to spaces. */
export function normalize(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[øæœßł]/g, (c) => LETTER_FOLDS[c])
		.replace(/['’‘`]/g, '')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();
}

export function tokenize(query: string): string[] {
	return normalize(query)
		.split(' ')
		.filter((t) => t.length > 0);
}

/** A record prepared for matching. Build it once per record, not once per keystroke. */
export interface FuzzyTarget {
	title: string;
	titleWords: string[];
	text: string;
	textWords: string[];
}

export function fuzzyTarget(title: string, rest: (string | undefined)[] = []): FuzzyTarget {
	const normalTitle = normalize(title);
	const text = [normalTitle, ...rest.filter(Boolean).map((s) => normalize(s as string))].join(' ');
	return {
		title: normalTitle,
		titleWords: normalTitle.split(' ').filter(Boolean),
		text,
		textWords: [...new Set(text.split(' ').filter(Boolean))]
	};
}

/**
 * Whether `token` is an abbreviation of the phrase made of `words`: its letters in order,
 * the first at the start of a word, each next one either within MAX_SKIP letters in the
 * same word or at the start of a later word. Returns the fewest letters skipped inside
 * words, so "sips" fits Sippin' Santa (0) better than Simple Syrup (1), or -1 for no match.
 */
function abbreviationSkips(token: string, words: string[]): number {
	const chars: string[] = [];
	const wordStart: boolean[] = [];
	const wordIndex: number[] = [];
	words.forEach((word, w) => {
		for (let i = 0; i < word.length; i++) {
			chars.push(word[i]);
			wordStart.push(i === 0);
			wordIndex.push(w);
		}
	});

	// Fewest skips to finish the token from a letter matched at `pos`, memoized per position.
	const memo = new Map<number, number>();
	const from = (pos: number, q: number): number => {
		if (q === token.length) return 0;
		const key = pos * (token.length + 1) + q;
		const cached = memo.get(key);
		if (cached !== undefined) return cached;
		let best = Infinity;
		for (let next = pos + 1; next < chars.length; next++) {
			if (chars[next] !== token[q]) continue;
			const sameWord = wordIndex[next] === wordIndex[pos];
			const skipped = sameWord ? next - pos - 1 : 0;
			if (!wordStart[next] && (!sameWord || skipped > MAX_SKIP)) continue;
			best = Math.min(best, skipped + from(next, q + 1));
		}
		memo.set(key, best);
		return best;
	};

	let best = Infinity;
	for (let start = 0; start < chars.length; start++) {
		if (wordStart[start] && chars[start] === token[0]) best = Math.min(best, from(start, 1));
	}
	return best === Infinity ? -1 : best;
}

/** Optimal string alignment distance, bailing out early once it is known to exceed 1. */
function withinOneEdit(a: string, b: string): boolean {
	if (Math.abs(a.length - b.length) > 1) return false;
	const rows = a.length + 1;
	const cols = b.length + 1;
	const d: number[][] = Array.from({ length: rows }, (_, i) =>
		Array.from({ length: cols }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
	);
	for (let i = 1; i < rows; i++) {
		let rowMin = Infinity;
		for (let j = 1; j < cols; j++) {
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;
			d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
			if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
				d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
			}
			rowMin = Math.min(rowMin, d[i][j]);
		}
		if (rowMin > 1) return false;
	}
	return d[a.length][b.length] <= 1;
}

/**
 * One typo away from a word, or — for a longer token — from the start of a longer word (one
 * still being typed). Short tokens skip the second check; "zomb" is one letter from "comb".
 */
function isTypoOf(token: string, words: string[]): boolean {
	return words.some(
		(word) =>
			withinOneEdit(token, word) ||
			(token.length >= MIN_TYPO_PREFIX &&
				word.length > token.length &&
				withinOneEdit(token, word.slice(0, token.length)))
	);
}

function tokenScore(token: string, target: FuzzyTarget): number {
	if (target.title.startsWith(token)) return SCORE.TITLE_PREFIX;
	if (target.title.includes(token)) return SCORE.TITLE_CONTAINS;
	if (token.length >= MIN_FUZZY_TITLE) {
		const skips = abbreviationSkips(token, target.titleWords);
		if (skips >= 0) return Math.max(SCORE.TITLE_FUZZY - skips * 2, SCORE.TITLE_TYPO);
	}
	if (token.length >= MIN_TYPO_TITLE && isTypoOf(token, target.titleWords)) {
		return SCORE.TITLE_TYPO;
	}
	if (target.text.includes(token)) return SCORE.TEXT_CONTAINS;
	if (
		token.length >= MIN_FUZZY_TEXT &&
		target.textWords.some((word) => abbreviationSkips(token, [word]) >= 0)
	) {
		return SCORE.TEXT_FUZZY;
	}
	if (token.length >= MIN_TYPO_TEXT && isTypoOf(token, target.textWords)) {
		return SCORE.TEXT_FUZZY;
	}
	return 0;
}

/**
 * How well every query token matches the target, or 0 if any token misses entirely.
 * Higher is better; a title match always outranks one found only in the rest of the text.
 */
export function fuzzyScore(tokens: string[], target: FuzzyTarget): number {
	let total = 0;
	for (const token of tokens) {
		const score = tokenScore(token, target);
		if (score === 0) return 0;
		total += score;
	}
	return total;
}
