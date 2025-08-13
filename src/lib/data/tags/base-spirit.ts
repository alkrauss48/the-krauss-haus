import type { Tag, TagCategory } from '$lib/types/tags';

export const BASE_SPIRIT: TagCategory = {
	label: 'Base Spirit',
	color: '#B5651D' // rum-like brown
};

// Base Spirit Tags
const RUM: Tag = { label: 'Rum', category: BASE_SPIRIT };
const WHISKEY: Tag = { label: 'Whiskey', category: BASE_SPIRIT };
const TEQUILA: Tag = { label: 'Tequila', category: BASE_SPIRIT };
const MEZCAL: Tag = { label: 'Mezcal', category: BASE_SPIRIT };
const GIN: Tag = { label: 'Gin', category: BASE_SPIRIT };
const VODKA: Tag = { label: 'Vodka', category: BASE_SPIRIT };
const BRANDY: Tag = { label: 'Brandy', category: BASE_SPIRIT };
const AMARO: Tag = { label: 'Amaro', category: BASE_SPIRIT };

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
