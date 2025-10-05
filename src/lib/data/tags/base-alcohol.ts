import type { Tag, TagCategory } from '$lib/types/tags';

export const BASE_ALCOHOL: TagCategory = {
	label: 'Base Alcohol',
	color: '#a16207' // softer amber brown
};

// Base Spirit Tags
const RUM: Tag = { label: 'Rum', category: BASE_ALCOHOL, order: 1 };
const WHISKEY: Tag = { label: 'Whiskey', category: BASE_ALCOHOL, order: 2 };
const GIN: Tag = { label: 'Gin', category: BASE_ALCOHOL, order: 3 };
const BRANDY: Tag = { label: 'Brandy', category: BASE_ALCOHOL, order: 4 };
const TEQUILA: Tag = { label: 'Tequila', category: BASE_ALCOHOL, order: 5 };
const MEZCAL: Tag = { label: 'Mezcal', category: BASE_ALCOHOL, order: 6 };
const VODKA: Tag = { label: 'Vodka', category: BASE_ALCOHOL, order: 7 };

export const TAGS = {
	RUM,
	WHISKEY,
	TEQUILA,
	MEZCAL,
	GIN,
	VODKA,
	BRANDY
};
