import type { TagCategory } from '$lib/types/tags';

// Import all tag categories
import { BASE_ALCOHOL, TAGS as BASE_ALCOHOL_TAGS } from '$lib/data/tags/base-alcohol';
import { FLAVOR_PROFILE, TAGS as FLAVOR_PROFILE_TAGS } from '$lib/data/tags/flavor-profile';
import { STYLE, TAGS as STYLE_TAGS } from '$lib/data/tags/style';
import { TECHNIQUE, TAGS as TECHNIQUE_TAGS } from '$lib/data/tags/technique';

import { ORIGIN, TAGS as ORIGIN_TAGS } from '$lib/data/tags/origin';
import { TEMPERATURE, TAGS as TEMPERATURE_TAGS } from '$lib/data/tags/temperature';
import { ALCOHOL_LEVEL, TAGS as ALCOHOL_LEVEL_TAGS } from '$lib/data/tags/alcohol-level';

// Structured namespace for easy access
export const Tags = {
	BaseAlcohol: BASE_ALCOHOL_TAGS,
	FlavorProfile: FLAVOR_PROFILE_TAGS,
	Style: STYLE_TAGS,
	Technique: TECHNIQUE_TAGS,

	Origin: ORIGIN_TAGS,
	Temperature: TEMPERATURE_TAGS,
	AlcoholLevel: ALCOHOL_LEVEL_TAGS
} as const;

// Create arrays of all tags by category for convenience
export const allTagCategories: TagCategory[] = [
	BASE_ALCOHOL,
	STYLE,
	ORIGIN,
	FLAVOR_PROFILE,
	ALCOHOL_LEVEL,
	TECHNIQUE,
	TEMPERATURE
];

// Create a map of all tag categories by label for quick lookups
export const tagCategoriesByLabel = new Map<string, TagCategory>(
	allTagCategories.map((category) => [category.label, category])
);
