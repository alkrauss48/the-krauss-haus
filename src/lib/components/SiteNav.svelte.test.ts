import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, within } from '@testing-library/svelte';
import { readable } from 'svelte/store';
import { allCollections } from '$lib/data/all-collections';

vi.mock('$app/navigation', () => ({ afterNavigate: vi.fn() }));
vi.mock('$app/stores', () => ({
	page: readable({ url: new URL('https://x.test/collections/tiki-mugs') })
}));

import SiteNav from './SiteNav.svelte';

function renderNav() {
	const onSearch = vi.fn();
	render(SiteNav, { onSearch });
	return { onSearch };
}

describe('SiteNav', () => {
	it('opens a group and shows every cocktail collection without visiting /collections', async () => {
		renderNav();
		const explore = screen.getByRole('button', { name: 'Explore' });
		expect(explore).toHaveAttribute('aria-expanded', 'false');

		await fireEvent.click(explore);

		expect(explore).toHaveAttribute('aria-expanded', 'true');
		const panel = document.getElementById(explore.getAttribute('aria-controls')!)!;
		for (const collection of allCollections) {
			expect(within(panel).getByRole('link', { name: collection.title })).toHaveAttribute(
				'href',
				`/collections/${collection.slug}`
			);
		}
	});

	it('keeps only one group open at a time and closes on Escape', async () => {
		renderNav();
		const menus = screen.getByRole('button', { name: 'Menus' });
		const more = screen.getByRole('button', { name: 'More' });

		await fireEvent.click(menus);
		await fireEvent.click(more);
		expect(menus).toHaveAttribute('aria-expanded', 'false');
		expect(more).toHaveAttribute('aria-expanded', 'true');

		await fireEvent.keyDown(window, { key: 'Escape' });
		expect(more).toHaveAttribute('aria-expanded', 'false');
		expect(more).toHaveFocus();
	});

	it('marks the current page', async () => {
		renderNav();
		await fireEvent.click(screen.getByRole('button', { name: 'Explore' }));
		expect(screen.getByRole('link', { name: 'Tiki Mugs' })).toHaveAttribute('aria-current', 'page');
	});

	it('toggles the mobile menu', async () => {
		renderNav();
		const toggle = screen.getByRole('button', { name: 'Open menu' });

		await fireEvent.click(toggle);

		expect(toggle).toHaveAttribute('aria-expanded', 'true');
		expect(toggle).toHaveAccessibleName('Close menu');
		const panel = document.getElementById('site-nav-mobile')!;
		expect(within(panel).getByRole('link', { name: 'Dilution Calculator' })).toBeInTheDocument();
	});

	it('hands search off to the layout', async () => {
		const { onSearch } = renderNav();
		await fireEvent.click(screen.getByRole('button', { name: 'Open search' }));
		expect(onSearch).toHaveBeenCalledOnce();
	});
});
