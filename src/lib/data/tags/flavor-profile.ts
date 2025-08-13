import type { Tag, TagCategory } from '$lib/types/tags';

export const FLAVOR_PROFILE: TagCategory = {
	label: 'Flavor Profile',
	color: '#FBC02D' // yellow/gold
};

// Flavor Profile Tags
const BOOZY: Tag = { label: 'Boozy', category: FLAVOR_PROFILE, order: 1 };
const BUBBLY: Tag = { label: 'Bubbly', category: FLAVOR_PROFILE, order: 2 };
const SPICED: Tag = { label: 'Spiced', category: FLAVOR_PROFILE, order: 3 };
const FRUITY: Tag = { label: 'Fruity', category: FLAVOR_PROFILE, order: 4 };
const CREAMY: Tag = { label: 'Creamy', category: FLAVOR_PROFILE, order: 5 };
const HERBAL: Tag = { label: 'Herbal', category: FLAVOR_PROFILE, order: 6 };
const CITRUS: Tag = { label: 'Citrus', category: FLAVOR_PROFILE, order: 7 };
const BITTER: Tag = { label: 'Bitter', category: FLAVOR_PROFILE, order: 8 };
const REFRESHING: Tag = { label: 'Refreshing', category: FLAVOR_PROFILE, order: 9 };

export const TAGS = {
	BOOZY,
	BUBBLY,
	SPICED,
	FRUITY,
	CREAMY,
	HERBAL,
	CITRUS,
	BITTER,
	REFRESHING
};
