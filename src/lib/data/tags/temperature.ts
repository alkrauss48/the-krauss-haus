import type { Tag, TagCategory } from '$lib/types/tags';

export const TEMPERATURE: TagCategory = {
	label: 'Temperature',
	color: '#007ACC' // tiki blue
};

// Temperature Tags
const FROZEN: Tag = { label: 'Frozen', category: TEMPERATURE, order: 1 };
const HOT: Tag = { label: 'Hot', category: TEMPERATURE, order: 2 };

export const TAGS = {
	FROZEN,
	HOT
};
