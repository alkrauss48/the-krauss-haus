import type { Tag, TagCategory } from '$lib/types/tags';

export const BASE_SPIRIT: TagCategory = {
	label: 'Base Spirit',
	color: '#B5651D' // rum-like brown
};

// Base Spirit Tags
const RUM: Tag = { label: 'Rum', category: BASE_SPIRIT, order: 1 };
const WHISKEY: Tag = { label: 'Whiskey', category: BASE_SPIRIT, order: 2 };
const GIN: Tag = { label: 'Gin', category: BASE_SPIRIT, order: 3 };
const BRANDY: Tag = { label: 'Brandy', category: BASE_SPIRIT, order: 4 };
const TEQUILA: Tag = { label: 'Tequila', category: BASE_SPIRIT, order: 5 };
const MEZCAL: Tag = { label: 'Mezcal', category: BASE_SPIRIT, order: 6 };
const AMARO: Tag = { label: 'Amaro', category: BASE_SPIRIT, order: 7 };
const VODKA: Tag = { label: 'Vodka', category: BASE_SPIRIT, order: 8 };

export const TAGS = {
	RUM,
	WHISKEY,
	TEQUILA,
	MEZCAL,
	GIN,
	VODKA,
	BRANDY,
	AMARO
};
