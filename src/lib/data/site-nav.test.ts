import { describe, it, expect } from 'vitest';
import { siteNav, isActive, groupIsActive, type NavGroup, type NavLink } from './site-nav';
import { allCollections } from './all-collections';
import { menuConfig } from './menu-config';

const group = (label: string) => siteNav.find((g) => g.label === label) as NavGroup;
const links = (g: NavGroup) => g.sections.flat().filter((item): item is NavLink => 'href' in item);

describe('siteNav', () => {
	it('offers every menu under Menus', () => {
		const hrefs = links(group('Menus')).map((link) => link.href);
		expect(hrefs.sort()).toEqual(
			Object.keys(menuConfig)
				.map((slug) => `/menu/${slug}`)
				.sort()
		);
	});

	it('expands every cocktail collection beneath Collections, in order', () => {
		const collections = links(group('Explore')).find((link) => link.href === '/collections');
		expect(collections?.children).toEqual(
			allCollections.map((collection) => ({
				label: collection.title,
				href: `/collections/${collection.slug}`
			}))
		);
	});
});

describe('isActive', () => {
	it('matches the page itself and the pages beneath it, not lookalike prefixes', () => {
		expect(isActive('/collections', '/collections')).toBe(true);
		expect(isActive('/collections/tiki-mugs', '/collections')).toBe(true);
		expect(isActive('/collectionsx', '/collections')).toBe(false);
		expect(isActive('/collections', '/collections/tiki-mugs')).toBe(false);
	});
});

describe('groupIsActive', () => {
	it('lights up the group that holds the current page', () => {
		expect(groupIsActive('/collections/tiki-mugs', group('Explore'))).toBe(true);
		expect(groupIsActive('/menu/summer', group('Menus'))).toBe(true);
		expect(groupIsActive('/menu/summer', group('Explore'))).toBe(false);
		expect(groupIsActive('/', group('More'))).toBe(false);
	});
});
