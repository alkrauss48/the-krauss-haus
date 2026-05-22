import { allCocktails } from './all-cocktails';
import { allRecipes } from './all-recipes';
import { allPaths } from './all-paths';
import { allParties } from './all-parties';
import { allBartenders } from './all-bartenders';
import { menuConfig } from './menu-config';
import { getIngredientDisplayName } from '$lib/utils/ingredients';

export type SearchableType =
	| 'cocktail'
	| 'recipe'
	| 'path'
	| 'party'
	| 'bartender'
	| 'menu'
	| 'page';

export interface SearchableItem {
	type: SearchableType;
	typeLabel: string;
	title: string;
	description?: string;
	href: string;
	imagePath?: string;
	keywords?: string[];
}

function cocktailItems(): SearchableItem[] {
	return allCocktails.map((c) => {
		const tagLabels = c.tags?.map((t) => t.label) ?? [];
		const ingredientNames =
			c.ingredients?.map((i) => (typeof i === 'string' ? i : getIngredientDisplayName(i))) ?? [];
		const keywords = [c.subtitle, ...tagLabels, ...ingredientNames, c.method].filter(
			(k): k is string => Boolean(k)
		);
		return {
			type: 'cocktail',
			typeLabel: 'Cocktail',
			title: c.title,
			description: c.description,
			href: `/cocktails/${c.slug}`,
			imagePath: c.thumbnailImagePath || c.imagePath,
			keywords
		};
	});
}

function recipeItems(): SearchableItem[] {
	return allRecipes.map((r) => ({
		type: 'recipe',
		typeLabel: 'Recipe',
		title: r.name,
		description: r.description,
		href: `/recipes/${r.slug}`,
		keywords: r.ingredients
	}));
}

function pathItems(): SearchableItem[] {
	return allPaths.map((p) => ({
		type: 'path',
		typeLabel: 'Path',
		title: p.title,
		description: p.description,
		href: `/paths/${p.slug}`,
		imagePath: p.imagePath,
		keywords: [p.subtitle, ...p.cocktails.map((c) => c.title)].filter((k): k is string =>
			Boolean(k)
		)
	}));
}

function partyItems(): SearchableItem[] {
	return allParties.map((p) => ({
		type: 'party',
		typeLabel: 'Party',
		title: p.name,
		description: p.description,
		href: `/parties/${p.slug}`,
		keywords: p.schedule.map((s) => s.cocktail.title)
	}));
}

function bartenderItems(): SearchableItem[] {
	return allBartenders.map((b) => ({
		type: 'bartender',
		typeLabel: 'Bartender',
		title: b.name,
		description: b.description,
		href: `/bartenders/${b.slug}`,
		imagePath: b.imageUrl
	}));
}

function menuItems(): SearchableItem[] {
	return Object.entries(menuConfig).map(([slug, config]) => ({
		type: 'menu',
		typeLabel: 'Menu',
		title: config.title,
		description: config.subtitle,
		href: `/menu/${slug}`,
		keywords: config.categories.flatMap((cat) => [cat.title, ...cat.cocktails.map((c) => c.title)])
	}));
}

function pageItems(): SearchableItem[] {
	return [
		{
			type: 'page',
			typeLabel: 'Page',
			title: 'Home',
			description: 'The Krauss Haus home page',
			href: '/'
		},
		{
			type: 'page',
			typeLabel: 'Page',
			title: 'All Cocktails',
			description: 'Browse the complete collection of cocktails',
			href: '/cocktails'
		},
		{
			type: 'page',
			typeLabel: 'Page',
			title: 'Recipes',
			description: 'Syrups, infusions, and other house recipes',
			href: '/recipes'
		},
		{
			type: 'page',
			typeLabel: 'Page',
			title: 'Cocktail Paths',
			description: 'Discover cocktails through guided paths',
			href: '/paths'
		},
		{
			type: 'page',
			typeLabel: 'Page',
			title: 'Parties',
			description: 'Past and upcoming cocktail parties',
			href: '/parties'
		},
		{
			type: 'page',
			typeLabel: 'Page',
			title: 'Bartenders',
			description: 'Bartenders and bars whose drinks inspire the menu',
			href: '/bartenders'
		},
		{
			type: 'page',
			typeLabel: 'Page',
			title: 'Ingredients',
			description: 'Browse all ingredients used across the menu',
			href: '/ingredients'
		},
		{
			type: 'page',
			typeLabel: 'Page',
			title: 'Spirit Dilution Calculator',
			description: 'Calculate dilution and ABV for batched spirits',
			href: '/spirit-dilution-calculator',
			keywords: ['abv', 'proof', 'calculator', 'dilution']
		}
	];
}

export const allSearchable: SearchableItem[] = [
	...pageItems(),
	...menuItems(),
	...pathItems(),
	...cocktailItems(),
	...recipeItems(),
	...partyItems(),
	...bartenderItems()
];

function tokenize(query: string): string[] {
	return query
		.toLowerCase()
		.trim()
		.split(/\s+/)
		.filter((t) => t.length > 0);
}

function itemHaystack(item: SearchableItem): string {
	return [item.title, item.description, ...(item.keywords ?? [])]
		.filter(Boolean)
		.join(' ')
		.toLowerCase();
}

const typeRank: Record<SearchableType, number> = {
	cocktail: 0,
	menu: 1,
	path: 2,
	recipe: 3,
	bartender: 4,
	party: 5,
	page: 6
};

export interface SearchResult {
	item: SearchableItem;
	score: number;
}

export function searchAll(query: string, limit = 40): SearchResult[] {
	const tokens = tokenize(query);
	if (tokens.length === 0) return [];

	const results: SearchResult[] = [];
	for (const item of allSearchable) {
		const haystack = itemHaystack(item);
		const title = item.title.toLowerCase();

		let score = 0;
		let matchedAll = true;
		for (const token of tokens) {
			if (!haystack.includes(token)) {
				matchedAll = false;
				break;
			}
			if (title.startsWith(token)) score += 100;
			else if (title.includes(token)) score += 50;
			else score += 10;
		}
		if (!matchedAll) continue;
		results.push({ item, score });
	}

	results.sort((a, b) => {
		if (b.score !== a.score) return b.score - a.score;
		const typeDiff = typeRank[a.item.type] - typeRank[b.item.type];
		if (typeDiff !== 0) return typeDiff;
		return a.item.title.localeCompare(b.item.title);
	});

	return results.slice(0, limit);
}
