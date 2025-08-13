import type { Tag, TagCategory } from '$lib/types/tags';

export const FLAVOR_PROFILE: TagCategory = {
	label: 'Flavor Profile',
	color: '#FBC02D' // yellow/gold
};

// Flavor Profile Tags
const BOOZY: Tag = { label: 'Boozy', category: FLAVOR_PROFILE };
const BUBBLY: Tag = { label: 'Bubbly', category: FLAVOR_PROFILE };
const SPICED: Tag = { label: 'Spiced', category: FLAVOR_PROFILE };
const FRUITY: Tag = { label: 'Fruity', category: FLAVOR_PROFILE };
const CREAMY: Tag = { label: 'Creamy', category: FLAVOR_PROFILE };
const HERBAL: Tag = { label: 'Herbal', category: FLAVOR_PROFILE };
const CITRUS: Tag = { label: 'Citrus', category: FLAVOR_PROFILE };
const BITTER: Tag = { label: 'Bitter', category: FLAVOR_PROFILE };
const REFRESHING: Tag = { label: 'Refreshing', category: FLAVOR_PROFILE };

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
