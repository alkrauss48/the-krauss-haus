import type { Tag, TagCategory } from '$lib/types/tags';

export const ALCOHOL_LEVEL: TagCategory = {
	label: 'Alcohol Level',
	color: '#e11d48' // softer rose red
};

// Alcohol Level Tags
const HIGH: Tag = { label: 'Higher Alcohol', category: ALCOHOL_LEVEL, order: 1 };
const LOW: Tag = { label: 'Lower Alcohol', category: ALCOHOL_LEVEL, order: 2 };

export const TAGS = {
	HIGH,
	LOW
};
