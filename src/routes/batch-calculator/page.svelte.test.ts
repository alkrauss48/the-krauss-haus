import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { readable } from 'svelte/store';
import Page from './+page.svelte';

const url = vi.hoisted(() => ({ current: new URL('http://localhost/batch-calculator') }));
const replaceState = vi.hoisted(() => vi.fn());

vi.mock('$app/stores', () => ({
	page: readable({ url: new URL('http://localhost/batch-calculator') })
}));
vi.mock('$app/state', () => ({
	page: {
		get url() {
			return url.current;
		}
	}
}));
vi.mock('$app/navigation', () => ({ replaceState }));

beforeEach(() => {
	url.current = new URL('http://localhost/batch-calculator');
	replaceState.mockClear();
});

function search(): HTMLElement {
	return screen.getByRole('combobox', { name: 'Search cocktails' });
}

describe('/batch-calculator', () => {
	it('shows no batch until a cocktail is picked', () => {
		render(Page);
		expect(search()).toBeInTheDocument();
		expect(screen.queryByLabelText('Servings')).not.toBeInTheDocument();
	});

	it('filters cocktails by name and opens the batch for the one picked', async () => {
		render(Page);
		await fireEvent.input(search(), { target: { value: 'daiqu' } });

		const option = screen.getByRole('option', { name: /^Daiquiri$/ });
		await fireEvent.click(option);

		const selected = screen.getByTestId('batch-selected');
		expect(selected).toHaveTextContent('Daiquiri');
		expect(screen.getByRole('img', { name: 'Daiquiri' })).toBeInTheDocument();
		expect(screen.getByLabelText('Servings')).toBeInTheDocument();
		expect(replaceState).toHaveBeenCalledWith('/batch-calculator?cocktail=daiquiri', {});
	});

	it('picks the highlighted cocktail with the keyboard', async () => {
		render(Page);
		await fireEvent.input(search(), { target: { value: 'daiquiri' } });
		await fireEvent.keyDown(search(), { key: 'Enter' });
		expect(screen.getByTestId('batch-selected')).toBeInTheDocument();
	});

	it('says so when nothing matches', async () => {
		render(Page);
		await fireEvent.input(search(), { target: { value: 'zzzz' } });
		expect(screen.getByText(/no cocktails match/i)).toBeInTheDocument();
	});

	it('opens on the cocktail named in the URL, and can switch away from it', async () => {
		url.current = new URL('http://localhost/batch-calculator?cocktail=daiquiri');
		render(Page);
		expect(screen.getByTestId('batch-selected')).toHaveTextContent('Daiquiri');

		await fireEvent.click(screen.getByRole('button', { name: 'Change' }));
		expect(screen.queryByTestId('batch-selected')).not.toBeInTheDocument();
		expect(search()).toBeInTheDocument();
	});

	it('ignores an unknown slug in the URL', () => {
		url.current = new URL('http://localhost/batch-calculator?cocktail=not-a-drink');
		render(Page);
		expect(screen.queryByTestId('batch-selected')).not.toBeInTheDocument();
	});
});
