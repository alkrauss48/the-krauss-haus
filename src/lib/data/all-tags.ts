import type { TagCategory } from '$lib/types/tags';

// Import all tag categories
import { BASE_SPIRIT, TAGS as BASE_SPIRIT_TAGS } from '$lib/data/tags/base-spirit';
import { FLAVOR_PROFILE, TAGS as FLAVOR_PROFILE_TAGS } from '$lib/data/tags/flavor-profile';
import { STYLE, TAGS as STYLE_TAGS } from '$lib/data/tags/style';
import { TECHNIQUE, TAGS as TECHNIQUE_TAGS } from '$lib/data/tags/technique';
import { INFUSIONS, TAGS as INFUSIONS_TAGS } from '$lib/data/tags/infusions';
import { SYRUPS, TAGS as SYRUPS_TAGS } from '$lib/data/tags/syrups';
import { ORIGIN, TAGS as ORIGIN_TAGS } from '$lib/data/tags/origin';
import { TEMPERATURE, TAGS as TEMPERATURE_TAGS } from '$lib/data/tags/temperature';

// Structured namespace for easy access
export const Tags = {
	BaseSpirit: BASE_SPIRIT_TAGS,
	FlavorProfile: FLAVOR_PROFILE_TAGS,
	Style: STYLE_TAGS,
	Technique: TECHNIQUE_TAGS,
	Infusions: INFUSIONS_TAGS,
	Syrups: SYRUPS_TAGS,
	Origin: ORIGIN_TAGS,
	Temperature: TEMPERATURE_TAGS
} as const;

// Create arrays of all tags by category for convenience
export const allTagCategories: TagCategory[] = [
	BASE_SPIRIT,
	FLAVOR_PROFILE,
	STYLE,
	ORIGIN,
	TECHNIQUE,
	INFUSIONS,
	SYRUPS,
	TEMPERATURE
];

// Create a map of all tag categories by label for quick lookups
export const tagCategoriesByLabel = new Map<string, TagCategory>(
	allTagCategories.map((category) => [category.label, category])
);
