import type { PageLoad } from './$types';
import { allCocktails } from '$lib/data/all-cocktails';
import { Tags, allTagCategories } from '$lib/data/all-tags';
import type { Tag } from '$lib/types/tags';
import type { Recipe } from '$lib/types/recipes';
import { syrups, infusions, other } from '$lib/data/all-recipes';

export const load: PageLoad = ({ url }) => {
	// Parse tags from URL query params using category-based structure
	const selectedTags: Tag[] = [];

	// For each category, check if there are selected tags
	allTagCategories.forEach((category) => {
		const categoryKey = categoryToUrlKey(category.label);
		const categoryParam = url.searchParams.get(categoryKey);

		if (categoryParam) {
			const tagLabels = categoryParam.split(',').map((label) => label.trim());
			const categoryTags = getTagsByLabelsInCategory(tagLabels, category.label);
			selectedTags.push(...categoryTags);
		}
	});

	// Parse recipes from URL query params
	const selectedRecipes: Recipe[] = [];

	// Check for syrup recipes
	const syrupParam = url.searchParams.get('homemade-syrups');
	if (syrupParam) {
		const syrupNames = syrupParam.split(',').map((name) => name.trim());
		const selectedSyrups = syrups.filter((syrup) => syrupNames.includes(syrup.name));
		selectedRecipes.push(...selectedSyrups);
	}

	// Check for infusion recipes
	const infusionParam = url.searchParams.get('homemade-infusions');
	if (infusionParam) {
		const infusionNames = infusionParam.split(',').map((name) => name.trim());
		const selectedInfusions = infusions.filter((infusion) => infusionNames.includes(infusion.name));
		selectedRecipes.push(...selectedInfusions);
	}

	// Check for other recipes
	const otherParam = url.searchParams.get('other');
	if (otherParam) {
		const otherNames = otherParam.split(',').map((name) => name.trim());
		const selectedOther = other.filter((recipe) => otherNames.includes(recipe.name));
		selectedRecipes.push(...selectedOther);
	}

	return {
		cocktails: allCocktails,
		selectedTags,
		selectedRecipes
	};
};

// Convert category label to URL-friendly key
function categoryToUrlKey(categoryLabel: string): string {
	return categoryLabel.toLowerCase().replace(/\s+/g, '-');
}

// Helper function to get Tag objects by their labels within a specific category
function getTagsByLabelsInCategory(labels: string[], categoryLabel: string): Tag[] {
	const allTags: Tag[] = [];

	// Collect all tags from all categories
	Object.values(Tags).forEach((categoryTags) => {
		Object.values(categoryTags).forEach((tag) => {
			if (typeof tag === 'object' && 'label' in tag) {
				allTags.push(tag as Tag);
			}
		});
	});

	// Find matching tags by label within the specified category (case-insensitive)
	return labels
		.map((label) =>
			allTags.find(
				(tag) =>
					tag.label.toLowerCase() === label.toLowerCase() && tag.category.label === categoryLabel
			)
		)
		.filter((tag): tag is Tag => tag !== undefined);
}
