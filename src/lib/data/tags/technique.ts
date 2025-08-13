import type { Tag, TagCategory } from '$lib/types/tags';

export const TECHNIQUE: TagCategory = {
	label: 'Technique',
	color: '#FF5722' // orange
};

// Technique Tags
const SHAKEN: Tag = { label: 'Shaken', category: TECHNIQUE, order: 1 };
const STIRRED: Tag = { label: 'Stirred', category: TECHNIQUE, order: 2 };
const BUILT: Tag = { label: 'Built', category: TECHNIQUE, order: 3 };
const FLASH_BLENDED: Tag = { label: 'Flash Blended', category: TECHNIQUE, order: 4 };
const BLENDED: Tag = { label: 'Blended', category: TECHNIQUE, order: 5 };

export const TAGS = {
	STIRRED,
	SHAKEN,
	FLASH_BLENDED,
	BLENDED,
	BUILT
};
