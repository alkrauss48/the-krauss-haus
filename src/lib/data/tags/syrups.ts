import type { Tag, TagCategory } from '$lib/types/tags';

export const SYRUPS: TagCategory = {
	label: 'Homemade Syrups',
	color: '#eab308' // softer golden yellow
};

// Syrup Tags
const RICH_SIMPLE_SYRUP: Tag = { label: 'Rich Simple Syrup', category: SYRUPS, order: 1 };
const DEMERARA_SYRUP: Tag = { label: 'Demerara Syrup', category: SYRUPS, order: 2 };
const GRENADINE: Tag = { label: 'Grenadine', category: SYRUPS, order: 3 };
const ORGEAT: Tag = { label: 'Orgeat', category: SYRUPS, order: 4 };
const FASSIONOLA: Tag = { label: 'Fassionola', category: SYRUPS, order: 5 };
const PASSION_FRUIT_SYRUP: Tag = { label: 'Passion Fruit Syrup', category: SYRUPS, order: 6 };
const CINNAMON_SYRUP: Tag = { label: 'Cinnamon Syrup', category: SYRUPS, order: 7 };
const HONEY_GINGER_SYRUP: Tag = { label: 'Honey Ginger Syrup', category: SYRUPS, order: 8 };
const HONEY_SYRUP: Tag = { label: 'Honey Syrup', category: SYRUPS, order: 9 };
const CARAMEL_SYRUP: Tag = { label: 'Caramel Syrup', category: SYRUPS, order: 10 };
const TOM_AND_JERRY_BATTER: Tag = { label: 'Tom and Jerry Batter', category: SYRUPS, order: 11 };

export const TAGS = {
	CARAMEL_SYRUP,
	CINNAMON_SYRUP,
	DEMERARA_SYRUP,
	FASSIONOLA,
	GRENADINE,
	HONEY_GINGER_SYRUP,
	HONEY_SYRUP,
	ORGEAT,
	PASSION_FRUIT_SYRUP,
	RICH_SIMPLE_SYRUP,
	TOM_AND_JERRY_BATTER
};
