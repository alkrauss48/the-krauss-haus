import { describe, it, expect } from 'vitest';
import { collectionCocktails } from './collections';
import type { Cocktail } from '$lib/types/cocktails';

function cocktail(slug: string): Cocktail {
	return { title: slug, description: '', imagePath: '', thumbnailImagePath: '', slug };
}

const base = { slug: 'test', title: 'Test', description: '' };

describe('collectionCocktails', () => {
	it('returns a flat collection as authored', () => {
		const cocktails = [cocktail('a'), cocktail('b')];
		expect(collectionCocktails({ ...base, cocktails })).toBe(cocktails);
	});

	it('flattens a grouped collection in group order', () => {
		const slugs = collectionCocktails({
			...base,
			groups: [
				{ heading: 'One', cocktails: [cocktail('a'), cocktail('b')] },
				{ heading: 'Two', cocktails: [cocktail('c')] }
			]
		}).map((c) => c.slug);
		expect(slugs).toEqual(['a', 'b', 'c']);
	});
});
