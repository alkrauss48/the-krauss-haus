import { describe, it, expect } from 'vitest';
import { Ingredients } from '$lib/data/all-ingredients';
import type { Cocktail } from '$lib/types/cocktails';
import { ingredientKey, ingredientKeyLabel, isGarnish, requiredItems } from './ingredient-keys';

describe('ingredientKey', () => {
	it('gives bottles in the same group one key', () => {
		const appleton = ingredientKey(Ingredients.BaseSpirits.APPLETON_ESTATE_SIGNATURE);
		expect(appleton).toBe('group:jamaican-rum');
		expect(ingredientKey(Ingredients.BaseSpirits.CORUBA)).toBe(appleton);
	});

	it('keys an ungrouped ingredient by its slug', () => {
		expect(ingredientKey(Ingredients.Liqueurs.FALERNUM)).toBe('ingredient:falernum');
	});

	it('strips accents from group names', () => {
		expect(ingredientKey(Ingredients.BaseSpirits.CLEMENT_SELECT_BARREL)).toBe(
			'group:eleve-sous-bois-rhum-agricole'
		);
	});

	it('labels a key by its group, or the title when there is none', () => {
		expect(ingredientKeyLabel(Ingredients.BaseSpirits.CORUBA)).toBe('Jamaican Rum');
		expect(ingredientKeyLabel(Ingredients.Liqueurs.FALERNUM)).toBe('Falernum');
	});
});

describe('requiredItems', () => {
	it('drops garnishes and free text but keeps a garnish ingredient used another way', () => {
		const drink: Cocktail = {
			title: 'Test',
			slug: 'test',
			description: '',
			imagePath: '',
			thumbnailImagePath: '',
			ingredients: [
				{ amount: '2oz', ingredient: Ingredients.BaseSpirits.CORUBA },
				{ label: '1 Lime coin', ingredient: Ingredients.Citrus.LIME_GARNISH },
				{ label: 'Garnish: Lime wheel', ingredient: Ingredients.Citrus.LIME_GARNISH },
				'Garnish: Edible flower'
			]
		};
		expect(requiredItems(drink).map((item) => item.label ?? item.ingredient.slug)).toEqual([
			'coruba',
			'1 Lime coin'
		]);
	});

	it('recognizes garnish labels regardless of case', () => {
		expect(isGarnish({ label: 'garnish: mint', ingredient: Ingredients.HerbsAndSpices.MINT })).toBe(
			true
		);
		expect(isGarnish({ ingredient: Ingredients.HerbsAndSpices.MINT })).toBe(false);
	});
});
