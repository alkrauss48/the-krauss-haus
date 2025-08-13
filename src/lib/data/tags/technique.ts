import type { Tag, TagCategory } from '$lib/types/tags';

export const TECHNIQUE: TagCategory = {
	label: 'Technique',
	color: '#FF5722' // orange
};

// Technique Tags
const STIRRED: Tag = { label: 'Stirred', category: TECHNIQUE };
const SHAKEN: Tag = { label: 'Shaken', category: TECHNIQUE };
const FLASH_BLENDED: Tag = { label: 'Flash Blended', category: TECHNIQUE };
const BLENDED: Tag = { label: 'Blended', category: TECHNIQUE };
const BUILT: Tag = { label: 'Built', category: TECHNIQUE };

export const TAGS = {
	STIRRED,
	SHAKEN,
	FLASH_BLENDED,
	BLENDED,
	BUILT
};
