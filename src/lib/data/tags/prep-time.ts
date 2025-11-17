import type { Tag, TagCategory } from '$lib/types/tags';

export const PREP_TIME: TagCategory = {
	label: 'Prep Time',
	color: '#10b981' // softer emerald green
};

// Prep Time Tags
const SIMPLE_PREP: Tag = { label: 'Simple Prep', category: PREP_TIME, order: 1 };
const COMPLEX_PREP: Tag = { label: 'Complex Prep', category: PREP_TIME, order: 2 };

export const TAGS = {
	SIMPLE_PREP,
	COMPLEX_PREP
};
