import type { Tag, TagCategory } from '$lib/types/tags';

export const ORIGIN: TagCategory = {
	label: 'Origin',
	color: '#a3a3a3' // soft warm gray
};

// Origin Tags
const ORIGINAL: Tag = { label: 'Original', category: ORIGIN, order: 1 };
const CLASSIC: Tag = { label: 'Classic', category: ORIGIN, order: 2 };
const MODERN: Tag = { label: 'Modern', category: ORIGIN, order: 3 };
const FOLK: Tag = { label: 'Folk', category: ORIGIN, order: 4 };

export const TAGS = {
	ORIGINAL,
	CLASSIC,
	MODERN,
	FOLK
};
