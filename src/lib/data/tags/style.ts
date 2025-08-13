import type { Tag, TagCategory } from '$lib/types/tags';

export const STYLE: TagCategory = {
	label: 'Style',
	color: '#007ACC' // tiki blue
};

// Style Tags
const CLASSIC: Tag = { label: 'Classic', category: STYLE, order: 1 };
const MODERN: Tag = { label: 'Modern', category: STYLE, order: 2 };
const ORIGINAL: Tag = { label: 'Original', category: STYLE, order: 3 };
const TIKI: Tag = { label: 'Tiki', category: STYLE, order: 4 };
const SOUR: Tag = { label: 'Sour', category: STYLE, order: 5 };
const HIGHBALL: Tag = { label: 'Highball', category: STYLE, order: 6 };
const LOWBALL: Tag = { label: 'Lowball', category: STYLE, order: 7 };
const FROZEN: Tag = { label: 'Frozen', category: STYLE, order: 8 };
const HOT: Tag = { label: 'Hot', category: STYLE, order: 9 };

export const TAGS = {
	TIKI,
	CLASSIC,
	MODERN,
	ORIGINAL,
	SOUR,
	HIGHBALL,
	LOWBALL,
	FROZEN,
	HOT
};
