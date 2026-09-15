import { describe, it, expect } from 'vitest';
import { matchesTagsLogic, matchesIngredientsLogic } from './filterLogic';
import type { Cocktail } from '$lib/types/cocktails';
import type { Tag, TagCategory } from '$lib/types/tags';
import type { Ingredient } from '$lib/types/ingredients';
import type { LogicMode } from '$lib/types/filters';

const CATEGORY: TagCategory = { label: 'Base Alcohol', color: '#000' };
const RUM: Tag = { label: 'Rum', order: 1, category: CATEGORY };
const GIN: Tag = { label: 'Gin', order: 2, category: CATEGORY };
const TIKI: Tag = { label: 'Tiki', order: 3, category: { label: 'Style', color: '#111' } };

const LIME: Ingredient = { title: 'Lime', slug: 'lime' };
const RUM_ING: Ingredient = { title: 'Rum', slug: 'rum' };
const GIN_ING: Ingredient = { title: 'Gin', slug: 'gin' };

const ALL_MODES: LogicMode[] = ['AND', 'OR', 'NOT AND', 'NOT OR'];

function cocktail(overrides: Partial<Cocktail> = {}): Cocktail {
	return {
		title: 'Test',
		description: '',
		imagePath: '',
		thumbnailImagePath: '',
		slug: 'test',
		...overrides
	};
}

describe('matchesTagsLogic', () => {
	const drink = cocktail({ tags: [RUM, TIKI] });

	it('matches everything when no tags are selected, in every mode', () => {
		for (const mode of ALL_MODES) {
			expect(matchesTagsLogic(drink, [], mode)).toBe(true);
			expect(matchesTagsLogic(cocktail(), [], mode)).toBe(true);
		}
	});

	describe('AND — match all', () => {
		it('includes a cocktail carrying every selected tag', () => {
			expect(matchesTagsLogic(drink, [RUM, TIKI], 'AND')).toBe(true);
		});
		it('excludes a cocktail missing any selected tag', () => {
			expect(matchesTagsLogic(drink, [RUM, GIN], 'AND')).toBe(false);
		});
	});

	describe('OR — match any', () => {
		it('includes a cocktail carrying at least one selected tag', () => {
			expect(matchesTagsLogic(drink, [GIN, TIKI], 'OR')).toBe(true);
		});
		it('excludes a cocktail carrying none of them', () => {
			expect(matchesTagsLogic(drink, [GIN], 'OR')).toBe(false);
		});
	});

	describe('NOT AND — exclude all', () => {
		it('excludes only cocktails carrying every selected tag', () => {
			expect(matchesTagsLogic(drink, [RUM, TIKI], 'NOT AND')).toBe(false);
		});
		it('keeps a cocktail missing at least one selected tag', () => {
			expect(matchesTagsLogic(drink, [RUM, GIN], 'NOT AND')).toBe(true);
		});
	});

	describe('NOT OR — exclude any', () => {
		it('excludes a cocktail carrying any selected tag', () => {
			expect(matchesTagsLogic(drink, [RUM, GIN], 'NOT OR')).toBe(false);
		});
		it('keeps a cocktail carrying none of them', () => {
			expect(matchesTagsLogic(drink, [GIN], 'NOT OR')).toBe(true);
		});
	});

	it('treats an untagged cocktail as matching nothing', () => {
		const untagged = cocktail();
		expect(matchesTagsLogic(untagged, [RUM], 'AND')).toBe(false);
		expect(matchesTagsLogic(untagged, [RUM], 'OR')).toBe(false);
		expect(matchesTagsLogic(untagged, [RUM], 'NOT AND')).toBe(true);
		expect(matchesTagsLogic(untagged, [RUM], 'NOT OR')).toBe(true);
	});

	it('compares tags by label, not object identity', () => {
		// Tag objects are re-exported through several modules; matching must survive a copy.
		const copy: Tag = { ...RUM };
		expect(matchesTagsLogic(drink, [copy], 'OR')).toBe(true);
	});
});

describe('matchesIngredientsLogic', () => {
	const drink = cocktail({
		ingredients: [{ amount: '2oz', ingredient: RUM_ING }, { ingredient: LIME }]
	});

	it('matches everything when no ingredients are selected, in every mode', () => {
		for (const mode of ALL_MODES) {
			expect(matchesIngredientsLogic(drink, [], mode)).toBe(true);
		}
	});

	it('applies AND / OR / NOT AND / NOT OR the same way tags do', () => {
		expect(matchesIngredientsLogic(drink, [RUM_ING, LIME], 'AND')).toBe(true);
		expect(matchesIngredientsLogic(drink, [RUM_ING, GIN_ING], 'AND')).toBe(false);

		expect(matchesIngredientsLogic(drink, [GIN_ING, LIME], 'OR')).toBe(true);
		expect(matchesIngredientsLogic(drink, [GIN_ING], 'OR')).toBe(false);

		expect(matchesIngredientsLogic(drink, [RUM_ING, LIME], 'NOT AND')).toBe(false);
		expect(matchesIngredientsLogic(drink, [RUM_ING, GIN_ING], 'NOT AND')).toBe(true);

		expect(matchesIngredientsLogic(drink, [RUM_ING], 'NOT OR')).toBe(false);
		expect(matchesIngredientsLogic(drink, [GIN_ING], 'NOT OR')).toBe(true);
	});

	it('matches on ingredients that only appear in a variant', () => {
		const withVariant = cocktail({
			ingredients: [{ ingredient: RUM_ING }],
			variations: [{ name: 'Gin version', images: [], ingredients: [{ ingredient: GIN_ING }] }]
		});
		expect(matchesIngredientsLogic(withVariant, [GIN_ING], 'OR')).toBe(true);
		expect(matchesIngredientsLogic(withVariant, [RUM_ING, GIN_ING], 'AND')).toBe(true);
		expect(matchesIngredientsLogic(withVariant, [GIN_ING], 'NOT OR')).toBe(false);
	});

	it('ignores free-text ingredients, which carry no slug to match on', () => {
		const textOnly = cocktail({ ingredients: ['2oz aged rum', 'Garnish: mint'] });
		expect(matchesIngredientsLogic(textOnly, [RUM_ING], 'OR')).toBe(false);
	});

	it('keeps a cocktail with no structured ingredients only under the NOT modes', () => {
		// Nothing to match means it cannot satisfy an include filter, but it also
		// cannot trip an exclude filter.
		const empty = cocktail({ ingredients: [] });
		expect(matchesIngredientsLogic(empty, [RUM_ING], 'AND')).toBe(false);
		expect(matchesIngredientsLogic(empty, [RUM_ING], 'OR')).toBe(false);
		expect(matchesIngredientsLogic(empty, [RUM_ING], 'NOT AND')).toBe(true);
		expect(matchesIngredientsLogic(empty, [RUM_ING], 'NOT OR')).toBe(true);
	});

	it('compares ingredients by slug, not object identity', () => {
		expect(matchesIngredientsLogic(drink, [{ ...RUM_ING }], 'OR')).toBe(true);
	});
});
