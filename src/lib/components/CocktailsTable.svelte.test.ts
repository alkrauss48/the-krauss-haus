/**
 * The table's search box is the only filtering rule that lives in a component rather
 * than in $lib/utils — it matches on title, description and variant text — so it needs
 * a rendered test. Tag/ingredient logic is covered by filterLogic.test.ts.
 */
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { readable } from 'svelte/store';
import type { Cocktail } from '$lib/types/cocktails';
import { CocktailMethod } from '$lib/enums/methods';

vi.mock('$app/navigation', () => ({ goto: vi.fn() }));
vi.mock('$app/stores', () => ({
	page: readable({ url: new URL('https://x.test/cocktails') })
}));

import CocktailsTable from './CocktailsTable.svelte';

const MAI_TAI: Cocktail = {
	title: 'Mai Tai',
	description: 'Aged rum, orgeat, lime and orange curaçao.',
	imagePath: 'mai-tai.webp',
	thumbnailImagePath: 'mai-tai-thumb.webp',
	slug: 'mai-tai',
	method: CocktailMethod.Shaken,
	variations: [
		{
			name: 'Royal Hawaiian',
			images: [],
			ingredients: [{ amount: '1oz', ingredient: { title: 'Pineapple Juice', slug: 'pineapple' } }]
		}
	]
};

const NEGRONI: Cocktail = {
	title: 'Negroni',
	description: 'Gin, Campari and sweet vermouth.',
	imagePath: 'negroni.webp',
	thumbnailImagePath: 'negroni-thumb.webp',
	slug: 'negroni',
	method: CocktailMethod.Stirred
};

const COCKTAILS = [MAI_TAI, NEGRONI];

function renderTable(props = {}) {
	return render(CocktailsTable, { cocktails: COCKTAILS, showFilters: false, ...props });
}

async function search(term: string) {
	const input = screen.getByLabelText('Search Cocktails') as HTMLInputElement;
	await fireEvent.input(input, { target: { value: term } });
}

function visibleTitles(): string[] {
	return screen
		.getAllByRole('heading', { level: 3 })
		.map((h) => h.textContent?.trim() ?? '')
		.filter(Boolean);
}

describe('CocktailsTable', () => {
	it('lists every cocktail before any search', () => {
		renderTable();
		expect(visibleTitles()).toEqual(['Mai Tai', 'Negroni']);
		expect(screen.getByText('2 cocktails total')).toBeInTheDocument();
	});

	it('filters by title, case-insensitively', async () => {
		renderTable();
		await search('negro');
		expect(visibleTitles()).toEqual(['Negroni']);
	});

	it('filters by description, so an ingredient in the blurb still finds the drink', async () => {
		renderTable();
		await search('campari');
		expect(visibleTitles()).toEqual(['Negroni']);
	});

	it('finds a cocktail by the name of one of its variants', async () => {
		renderTable();
		await search('royal hawaiian');
		expect(visibleTitles()).toEqual(['Mai Tai']);
	});

	it('finds a cocktail by an ingredient that only appears in a variant', async () => {
		renderTable();
		await search('pineapple');
		expect(visibleTitles()).toEqual(['Mai Tai']);
	});

	it('shows an empty state naming the search term when nothing matches', async () => {
		renderTable();
		await search('absinthe');
		expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0);
		expect(screen.getByText(/No cocktails found/)).toBeInTheDocument();
		// Named in both the results count and the empty state.
		expect(screen.getAllByText(/absinthe/).length).toBeGreaterThan(0);
	});

	it('reports how many of the total are showing', async () => {
		renderTable();
		await search('negroni');
		expect(screen.getByText(/Showing 1 of 2 cocktails/)).toBeInTheDocument();
	});

	it('applies a search term supplied by the URL on first render', () => {
		renderTable({ initialSearchTerm: 'negroni' });
		expect(visibleTitles()).toEqual(['Negroni']);
	});

	it('ignores the search box entirely when search is disabled', () => {
		renderTable({ showSearch: false, initialSearchTerm: 'nothing-matches-this' });
		expect(visibleTitles()).toEqual(['Mai Tai', 'Negroni']);
	});

	it('closes the filter sidebar from a button that shows the live result count', async () => {
		renderTable({ showFilters: true });
		await fireEvent.click(screen.getByRole('button', { name: /^Filters/ }));

		const showButton = screen.getByRole('button', { name: 'Show 2 cocktails' });
		const sidebar = showButton.closest('.fixed');
		expect(sidebar).toHaveClass('translate-x-0');

		await search('negroni');
		expect(screen.getByRole('button', { name: 'Show 1 cocktail' })).toBeInTheDocument();

		await search('absinthe');
		await fireEvent.click(screen.getByRole('button', { name: 'No matches' }));
		expect(sidebar).toHaveClass('translate-x-full');
	});

	it('holds the page still while the filter sidebar is open', async () => {
		document.body.style.overflow = 'auto';
		const { unmount } = renderTable({ showFilters: true });
		const filtersButton = screen.getByRole('button', { name: /^Filters/ });

		await fireEvent.click(filtersButton);
		expect(document.documentElement.style.overflow).toBe('hidden');
		expect(document.body.style.overflow).toBe('hidden');

		await fireEvent.click(screen.getByRole('button', { name: 'Close filters' }));
		expect(document.documentElement.style.overflow).toBe('');
		expect(document.body.style.overflow).toBe('auto');

		// Leaving the page with the sidebar open must not strand the page unscrollable
		await fireEvent.click(filtersButton);
		unmount();
		expect(document.body.style.overflow).toBe('auto');
		document.body.style.overflow = '';
	});

	it('hides the cost column until cost mode is on', () => {
		renderTable();
		expect(screen.queryByRole('button', { name: /Cost/ })).not.toBeInTheDocument();
	});
});
