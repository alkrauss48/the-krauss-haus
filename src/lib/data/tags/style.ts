import type { Tag, TagCategory } from '$lib/types/tags';

export const STYLE: TagCategory = {
	label: 'Style',
	color: '#007ACC' // tiki blue
};

// Style Tags
const TIKI: Tag = { label: 'Tiki', category: STYLE };
const CLASSIC: Tag = { label: 'Classic', category: STYLE };
const MODERN: Tag = { label: 'Modern', category: STYLE };
const ORIGINAL: Tag = { label: 'Original', category: STYLE };
const SOUR: Tag = { label: 'Sour', category: STYLE };
const HIGHBALL: Tag = { label: 'Highball', category: STYLE };
const LOWBALL: Tag = { label: 'Lowball', category: STYLE };
const FROZEN: Tag = { label: 'Frozen', category: STYLE };
const HOT: Tag = { label: 'Hot', category: STYLE };

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
