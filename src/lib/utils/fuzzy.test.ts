import { describe, it, expect } from 'vitest';
import { SCORE, fuzzyScore, fuzzyTarget, normalize, tokenize } from './fuzzy';

function score(query: string, title: string, rest: string[] = []): number {
	return fuzzyScore(tokenize(query), fuzzyTarget(title, rest));
}

describe('normalize', () => {
	it('lowercases and strips accents, apostrophes and punctuation', () => {
		expect(normalize("Sippin' Santa")).toBe('sippin santa');
		expect(normalize('Queen’s Park Swizzle')).toBe('queens park swizzle');
		expect(normalize('Piña Verde')).toBe('pina verde');
		expect(normalize('Vieux Carré')).toBe('vieux carre');
		expect(normalize('Øl og Snaps')).toBe('ol og snaps');
		expect(normalize('Dr. Funk')).toBe('dr funk');
		expect(normalize('Honey-Ginger Syrup')).toBe('honey ginger syrup');
	});
});

describe('fuzzyScore', () => {
	it('scores a title prefix above a title match above a match elsewhere', () => {
		const prefix = score('neg', 'Negroni');
		const contains = score('gron', 'Negroni');
		const elsewhere = score('campari', 'Negroni', ['Gin, Campari and sweet vermouth.']);
		expect(prefix).toBe(SCORE.TITLE_PREFIX);
		expect(contains).toBe(SCORE.TITLE_CONTAINS);
		expect(elsewhere).toBe(SCORE.TEXT_CONTAINS);
	});

	it('requires every word of the query to match', () => {
		expect(score('sip san', "Sippin' Santa")).toBeGreaterThan(0);
		expect(score('sip claus', "Sippin' Santa")).toBe(0);
	});

	it('matches abbreviations that jump between words', () => {
		expect(score('sips', "Sippin' Santa")).toBe(SCORE.TITLE_FUZZY);
		expect(score('qps', "Queen's Park Swizzle")).toBe(SCORE.TITLE_FUZZY);
	});

	it('matches words with a dropped letter, ranking fewer drops higher', () => {
		expect(score('mrtin', 'Martini')).toBeGreaterThan(0);
		expect(score('mrtin', 'Martini')).toBeLessThan(SCORE.TITLE_FUZZY);
		expect(score('sips', "Sippin' Santa")).toBeGreaterThan(score('sips', 'Rich Simple Syrup'));
	});

	it('does not stretch an abbreviation across big gaps inside a word', () => {
		expect(score('gin', 'Golden Ring')).toBe(0);
		expect(score('mtn', 'Martini')).toBe(0);
	});

	it('forgives one typo in a title word', () => {
		expect(score('matrini', 'Martini')).toBe(SCORE.TITLE_TYPO);
		expect(score('margarta', 'Margarita')).toBeGreaterThan(0);
	});

	it('forgives a typo partway through typing a longer word', () => {
		expect(score('matri', 'Martini')).toBe(SCORE.TITLE_TYPO);
	});

	it('keeps short words strict', () => {
		expect(score('mi', 'Martini')).toBe(0);
		expect(score('zomb', 'Combee')).toBe(0);
	});

	it('loosely matches single words in the rest of the text', () => {
		expect(score('campri', 'Negroni', ['Gin, Campari and sweet vermouth.'])).toBe(SCORE.TEXT_FUZZY);
		expect(score('vermuth', 'Negroni', ['Gin, Campari and sweet vermouth.'])).toBe(
			SCORE.TEXT_FUZZY
		);
	});

	it('ignores accents and apostrophes in the query too', () => {
		expect(score('piña', 'Pina Verde')).toBe(SCORE.TITLE_PREFIX);
		expect(score("queen's", 'Queens Park Swizzle')).toBe(SCORE.TITLE_PREFIX);
	});
});
