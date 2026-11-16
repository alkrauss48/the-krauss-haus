import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import BatchCalculator from './BatchCalculator.svelte';
import { CocktailMethod } from '$lib/enums/methods';
import { Ingredients } from '$lib/data/all-ingredients';
import type { Cocktail } from '$lib/types/cocktails';

const highball: Cocktail = {
	title: 'Test Highball',
	slug: 'test-highball',
	description: '',
	imagePath: '',
	thumbnailImagePath: '',
	method: CocktailMethod.Shaken,
	ingredients: [
		{ amount: '2oz', ingredient: Ingredients.BaseSpirits.CORUBA },
		{ amount: '4oz', ingredient: Ingredients.Mixers.GINGER_BEER }
	]
};

function batchVolumeRow(): HTMLElement {
	return screen.getByText('Batch volume').closest('tr') as HTMLElement;
}

describe('BatchCalculator', () => {
	it('updates the totals when the serving count changes', async () => {
		render(BatchCalculator, { cocktail: highball });
		expect(batchVolumeRow()).toHaveTextContent('16 oz');

		await fireEvent.input(screen.getByLabelText('Servings'), { target: { value: '3' } });
		expect(batchVolumeRow()).toHaveTextContent('6 oz');
	});

	it('adds a water row when freezer dilution is on', async () => {
		render(BatchCalculator, { cocktail: highball });
		expect(screen.queryByTestId('batch-water')).not.toBeInTheDocument();

		await fireEvent.click(
			screen.getByRole('checkbox', { name: /freezer batch \(\+25%, shaken\)/i })
		);
		expect(screen.getByTestId('batch-water')).toHaveTextContent('4 oz');
		expect(screen.getByText('Total').closest('tr')).toHaveTextContent('20 oz');
	});

	it('lists carbonated toppers apart from the batch', () => {
		render(BatchCalculator, { cocktail: highball });
		expect(screen.getByTestId('batch-toppers')).toHaveTextContent('Ginger Beer: 4oz per drink');
		expect(screen.getByRole('table')).not.toHaveTextContent('Ginger Beer');
	});

	it('totals the batch with what is added at service', async () => {
		render(BatchCalculator, { cocktail: highball });
		// 8 drinks: 16 oz of rum in the batch, 32 oz of ginger beer at service
		expect(screen.getByTestId('batch-served')).toHaveTextContent('48 oz');

		await fireEvent.click(screen.getByRole('checkbox', { name: /freezer batch/i }));
		// plus 4 oz of water
		expect(screen.getByTestId('batch-served')).toHaveTextContent('52 oz');
	});

	it('leaves the service total off when nothing is added at service', () => {
		const sour: Cocktail = { ...highball, ingredients: [highball.ingredients![0]] };
		render(BatchCalculator, { cocktail: sour });
		expect(screen.queryByTestId('batch-served')).not.toBeInTheDocument();
	});
});
