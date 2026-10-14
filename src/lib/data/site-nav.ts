import { menuConfig } from '$lib/data/menu-config';
import { allCollections } from '$lib/data/all-collections';

export interface NavLink {
	label: string;
	href: string;
	/** Shown indented beneath the link, always expanded. */
	children?: NavLink[];
}

/** A nav entry that does something in place instead of going somewhere. */
export interface NavAction {
	label: string;
	action: 'random-cocktail';
}

export type NavItem = NavLink | NavAction;

export interface NavGroup {
	label: string;
	/** Blocks of items, drawn with a divider between them. */
	sections: NavItem[][];
}

// The order the home page shows its menus in.
const MENU_ORDER = ['summer', 'tiki', 'winter'];

export const siteNav: NavGroup[] = [
	{
		label: 'Menus',
		sections: [MENU_ORDER.map((slug) => ({ label: menuConfig[slug].title, href: `/menu/${slug}` }))]
	},
	{
		label: 'Explore',
		sections: [
			[
				{ label: 'Paths', href: '/paths' },
				{ label: 'All Cocktails', href: '/cocktails' },
				{
					label: 'Collections',
					href: '/collections',
					children: allCollections.map((collection) => ({
						label: collection.title,
						href: `/collections/${collection.slug}`
					}))
				},
				{ label: 'Surprise Me', action: 'random-cocktail' }
			]
		]
	},
	{
		label: 'More',
		sections: [
			[
				{ label: 'Ingredients', href: '/ingredients' },
				{ label: 'Recipes', href: '/recipes' },
				{ label: 'Bartenders', href: '/bartenders' }
			],
			[
				{ label: 'Cocktail Parties', href: '/parties' },
				{ label: 'Dilution Calculator', href: '/spirit-dilution-calculator' }
			]
		]
	}
];

/** True when `pathname` is `href` itself or a page beneath it. */
export function isActive(pathname: string, href: string): boolean {
	return pathname === href || pathname.startsWith(href + '/');
}

export function groupIsActive(pathname: string, group: NavGroup): boolean {
	return group.sections.some((items) =>
		items.some((item) => 'href' in item && isActive(pathname, item.href))
	);
}
