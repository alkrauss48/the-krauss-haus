import type { Cocktail, Category } from '$lib/types/cocktails';
import { categories as summerCategories, featuredDrinks as summerFeatured } from './summer-menu';
import { categories as winterCategories, featuredDrinks as winterFeatured } from './winter-menu';
import { categories as tikiCategories } from './tiki-menu';

export interface MenuConfig {
	title: string;
	subtitle: string;
	categories: Category[];
	featuredDrinks?: Cocktail[];
}

export const menuConfig: Record<string, MenuConfig> = {
	summer: {
		title: 'Summer Menu',
		subtitle: 'Refreshing cocktails for the warm season',
		categories: summerCategories,
		featuredDrinks: summerFeatured
	},
	winter: {
		title: 'Winter Menu',
		subtitle: 'Warming cocktails for the cold season',
		categories: winterCategories,
		featuredDrinks: winterFeatured
	},
	tiki: {
		title: 'Tiki Menu',
		subtitle: 'Exotic cocktails for your tropical escape',
		categories: tikiCategories
	}
};
