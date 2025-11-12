import type { Tag, TagCategory } from '$lib/types/tags';

export const SERVED_IN: TagCategory = {
	label: 'Served In',
	color: '#8b5cf6' // violet purple (from IngredientCategory, not yet used in tags)
};

// Served In Tags
const COUPE_GLASS: Tag = { label: 'Coupe Glass', category: SERVED_IN, order: 1 };
const DOUBLE_ROCKS_GLASS: Tag = { label: 'Double Rocks Glass', category: SERVED_IN, order: 2 };
const SINGLE_ROCKS_GLASS: Tag = { label: 'Single Rocks Glass', category: SERVED_IN, order: 3 };
const NICK_AND_NORA_GLASS: Tag = { label: 'Nick & Nora Glass', category: SERVED_IN, order: 4 };
const HIGHBALL_GLASS: Tag = { label: 'Highball Glass', category: SERVED_IN, order: 5 };
const FLUTE_GLASS: Tag = { label: 'Flute Glass', category: SERVED_IN, order: 6 };
const TIKI_MUG: Tag = { label: 'Tiki Mug', category: SERVED_IN, order: 7 };
const PINT_GLASS: Tag = { label: 'Pint Glass', category: SERVED_IN, order: 8 };
const MUG: Tag = { label: 'Mug', category: SERVED_IN, order: 9 };
const JULEP_TIN: Tag = { label: 'Julep Tin', category: SERVED_IN, order: 10 };

export const TAGS = {
	COUPE_GLASS,
	DOUBLE_ROCKS_GLASS,
	SINGLE_ROCKS_GLASS,
	NICK_AND_NORA_GLASS,
	HIGHBALL_GLASS,
	FLUTE_GLASS,
	TIKI_MUG,
	PINT_GLASS,
	MUG,
	JULEP_TIN
};
