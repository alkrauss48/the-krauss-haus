import type { Tag, TagCategory } from '$lib/types/tags';

export const ALCOHOL_LEVEL: TagCategory = {
	label: 'Alcohol Level',
	color: '#E53E3E' // red
};

// Alcohol Level Tags
const HIGH: Tag = { label: 'Higher Alcohol', category: ALCOHOL_LEVEL, order: 1 };
const LOW: Tag = { label: 'Lower Alcohol', category: ALCOHOL_LEVEL, order: 2 };

export const TAGS = {
	HIGH,
	LOW
};
