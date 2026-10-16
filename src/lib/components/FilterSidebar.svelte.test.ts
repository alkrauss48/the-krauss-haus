/**
 * The filter pills show live counts and disable themselves when picking them would leave no
 * cocktails. They update in place — the same buttons, not a fresh set — so a tap mid-scroll
 * does not rebuild the list under the guest's finger.
 */
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import type { Cocktail } from '$lib/types/cocktails';
import { CocktailMethod } from '$lib/enums/methods';
import { Tags } from '$lib/data/all-tags';
import { Ingredients } from '$lib/data/all-ingredients';
import FilterSidebar from './FilterSidebar.svelte';

const { RUM, GIN } = Tags.BaseAlcohol;
const { LIME, LEMON } = Ingredients.Citrus;

function cocktail(slug: string, overrides: Partial<Cocktail>): Cocktail {
	return {
		title: slug,
		description: slug,
		imagePath: `${slug}.webp`,
		thumbnailImagePath: `${slug}-thumb.webp`,
		slug,
		method: CocktailMethod.Shaken,
		...overrides
	};
}

const COCKTAILS = [
	cocktail('daiquiri', { tags: [RUM], ingredients: [{ amount: '1oz', ingredient: LIME }] }),
	cocktail('rum-gimlet', {
		tags: [RUM, GIN],
		ingredients: [{ amount: '1oz', ingredient: LIME }]
	}),
	cocktail('bees-knees', { tags: [GIN], ingredients: [{ amount: '1oz', ingredient: LEMON }] })
];

function renderSidebar() {
	return render(FilterSidebar, { cocktails: COCKTAILS, isOpen: true });
}

function pill(label: string): HTMLButtonElement {
	return screen.getByRole('button', { name: new RegExp(`^${label} \\d+$`) });
}

describe('FilterSidebar', () => {
	it('updates tag counts in place as tags are picked', async () => {
		renderSidebar();
		const rum = pill('Rum');
		const gin = pill('Gin');
		expect(rum).toHaveTextContent('2');
		expect(gin).toHaveTextContent('2');

		await fireEvent.click(rum);

		expect(pill('Rum')).toBe(rum);
		expect(pill('Gin')).toBe(gin);
		expect(rum).toHaveTextContent('2');
		expect(gin).toHaveTextContent('1');
		expect(gin).not.toBeDisabled();
	});

	it('recounts tags when the logic mode changes', async () => {
		renderSidebar();
		await fireEvent.click(pill('Rum'));

		await fireEvent.change(screen.getByLabelText('Filter Logic'), { target: { value: 'NOT OR' } });

		expect(pill('Rum')).toHaveTextContent('1');
		// Excluding both rum and gin leaves nothing, so gin can no longer be picked
		expect(pill('Gin')).toHaveTextContent('0');
		expect(pill('Gin')).toBeDisabled();
	});

	it('updates ingredient counts in place and disables dead ends', async () => {
		renderSidebar();
		await fireEvent.click(screen.getByRole('button', { name: 'By Ingredients' }));
		await fireEvent.click(screen.getByRole('button', { name: /^Citrus/ }));

		const lime = pill('Lime Juice');
		const lemon = pill('Lemon Juice');
		expect(lime).toHaveTextContent('2');
		expect(lemon).toHaveTextContent('1');

		await fireEvent.click(lime);

		expect(pill('Lime Juice')).toBe(lime);
		expect(pill('Lemon Juice')).toBe(lemon);
		expect(lime).toHaveTextContent('2');
		// No cocktail uses both lime and lemon
		expect(lemon).toHaveTextContent('0');
		expect(lemon).toBeDisabled();
		expect(screen.getByRole('button', { name: /^Citrus/ })).toHaveTextContent('(1)');
	});
});
