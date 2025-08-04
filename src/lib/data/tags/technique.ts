import type { Tag, TagCategory } from '$lib/types/tags';

export const TECHNIQUE: TagCategory = {
	label: 'Technique',
	color: '#FF5722' // orange
};

// Technique Tags
export const STIRRED: Tag = { label: 'Stirred', category: TECHNIQUE };
export const SHAKEN: Tag = { label: 'Shaken', category: TECHNIQUE };
export const FLASH_BLENDED: Tag = { label: 'Flash Blended', category: TECHNIQUE };
export const BUILT: Tag = { label: 'Built', category: TECHNIQUE };
