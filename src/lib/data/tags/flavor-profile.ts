import type { Tag, TagCategory } from '$lib/types/tags';

export const FLAVOR_PROFILE: TagCategory = {
	label: 'Flavor Profile',
	color: '#10b981' // softer emerald green
};

// Flavor Profile Tags
const BUBBLY: Tag = { label: 'Bubbly', category: FLAVOR_PROFILE, order: 1 };
const SPICED: Tag = { label: 'Spiced', category: FLAVOR_PROFILE, order: 2 };
const FRUITY: Tag = { label: 'Fruity', category: FLAVOR_PROFILE, order: 3 };
const CREAMY: Tag = { label: 'Creamy', category: FLAVOR_PROFILE, order: 4 };
const HERBAL: Tag = { label: 'Herbal', category: FLAVOR_PROFILE, order: 5 };
const CITRUS: Tag = { label: 'Citrus', category: FLAVOR_PROFILE, order: 6 };
const BITTER: Tag = { label: 'Bitter', category: FLAVOR_PROFILE, order: 7 };

export const TAGS = {
	BUBBLY,
	SPICED,
	FRUITY,
	CREAMY,
	HERBAL,
	CITRUS,
	BITTER
};
