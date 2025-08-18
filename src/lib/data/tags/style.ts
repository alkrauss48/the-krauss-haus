import type { Tag, TagCategory } from '$lib/types/tags';

export const STYLE: TagCategory = {
	label: 'Style',
	color: '#0891b2' // softer teal blue
};

// Style Tags
const TIKI: Tag = { label: 'Tiki', category: STYLE, order: 1 };
const SOUR: Tag = { label: 'Sour', category: STYLE, order: 2 };
const SPIRIT_FORWARD: Tag = { label: 'Spirit Forward', category: STYLE, order: 3 };
const HIGHBALL: Tag = { label: 'Highball', category: STYLE, order: 4 };

export const TAGS = {
	TIKI,
	SOUR,
	SPIRIT_FORWARD,
	HIGHBALL
};
