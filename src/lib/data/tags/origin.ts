import type { Tag, TagCategory } from '$lib/types/tags';

export const ORIGIN: TagCategory = {
	label: 'Origin',
	color: '#007ACC' // tiki blue
};

// Origin Tags
const CLASSIC: Tag = { label: 'Classic', category: ORIGIN, order: 1 };
const MODERN: Tag = { label: 'Modern', category: ORIGIN, order: 2 };
const ORIGINAL: Tag = { label: 'Original', category: ORIGIN, order: 3 };

export const TAGS = {
	CLASSIC,
	MODERN,
	ORIGINAL
};
