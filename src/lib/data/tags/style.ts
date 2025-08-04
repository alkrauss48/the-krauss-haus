import type { Tag, TagCategory } from '$lib/types/tags';

export const STYLE: TagCategory = {
	label: 'Style',
	color: '#007ACC' // tiki blue
};

// Style Tags
export const TIKI: Tag = { label: 'Tiki', category: STYLE };
export const CLASSIC: Tag = { label: 'Classic', category: STYLE };
export const MODERN: Tag = { label: 'Modern', category: STYLE };
export const ORIGINAL: Tag = { label: 'Original', category: STYLE };
export const SOUR: Tag = { label: 'Sour', category: STYLE };
export const HIGHBALL: Tag = { label: 'Highball', category: STYLE };
export const LOWBALL: Tag = { label: 'Lowball', category: STYLE };
export const FROZEN: Tag = { label: 'Frozen', category: STYLE };
export const HOT: Tag = { label: 'Hot', category: STYLE };
