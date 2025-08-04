import type { Tag, TagCategory } from '$lib/types/tags';

export const FLAVOR_PROFILE: TagCategory = {
	label: 'Flavor Profile',
	color: '#FBC02D' // yellow/gold
};

// Flavor Profile Tags
export const BOOZY: Tag = { label: 'Boozy', category: FLAVOR_PROFILE };
export const BUBBLY: Tag = { label: 'Bubbly', category: FLAVOR_PROFILE };
export const SPICED: Tag = { label: 'Spiced', category: FLAVOR_PROFILE };
export const FRUITY: Tag = { label: 'Fruity', category: FLAVOR_PROFILE };
export const CREAMY: Tag = { label: 'Creamy', category: FLAVOR_PROFILE };
export const HERBAL: Tag = { label: 'Herbal', category: FLAVOR_PROFILE };
export const CITRUS: Tag = { label: 'Citrus', category: FLAVOR_PROFILE };
export const BITTER: Tag = { label: 'Bitter', category: FLAVOR_PROFILE };
export const REFRESHING: Tag = { label: 'Refreshing', category: FLAVOR_PROFILE };
