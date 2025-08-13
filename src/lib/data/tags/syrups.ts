import type { Tag, TagCategory } from '$lib/types/tags';

export const SYRUPS: TagCategory = {
	label: 'Syrups',
	color: '#007ACC' // tiki blue
};

// Syrup Tags
const CARAMEL_SYRUP: Tag = { label: 'Caramel Syrup', category: SYRUPS };
const CINNAMON_SYRUP: Tag = { label: 'Cinnamon Syrup', category: SYRUPS };
const DEMERARA_SYRUP: Tag = { label: 'Demerara Syrup', category: SYRUPS };
const FASSIONOLA: Tag = { label: 'Fassionola', category: SYRUPS };
const GRENADINE: Tag = { label: 'Grenadine', category: SYRUPS };
const HONEY_GINGER_SYRUP: Tag = { label: 'Honey Ginger Syrup', category: SYRUPS };
const HONEY_SYRUP: Tag = { label: 'Honey Syrup', category: SYRUPS };
const ORGEAT: Tag = { label: 'Orgeat', category: SYRUPS };
const PASSION_FRUIT_SYRUP: Tag = { label: 'Passion Fruit Syrup', category: SYRUPS };
const RICH_SIMPLE_SYRUP: Tag = { label: 'Rich Simple Syrup', category: SYRUPS };
const TOM_AND_JERRY_BATTER: Tag = { label: 'Tom and Jerry Batter', category: SYRUPS };

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
