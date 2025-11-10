import type { PageLoad } from './$types';
import { allCocktails } from '$lib/data/all-cocktails';
import { Tags, allTagCategories } from '$lib/data/all-tags';
import { allIngredientCategories } from '$lib/data/all-ingredients';
import type { Tag } from '$lib/types/tags';
import type { Ingredient } from '$lib/types/ingredients';
import type { LogicMode } from '$lib/types/filters';

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

	// Parse ingredients from URL query params using category-based structure
	const selectedIngredients: Ingredient[] = [];

	// For each ingredient category, check if there are selected ingredients
	allIngredientCategories.forEach((category) => {
		const categoryKey = categoryToUrlKey(category.label);
		const categoryParam = url.searchParams.get(`ingredient-${categoryKey}`);

		if (categoryParam) {
			const ingredientSlugs = categoryParam.split(',').map((slug) => slug.trim());
			const categoryIngredients = getIngredientsBySlugsInCategory(ingredientSlugs, category);
			selectedIngredients.push(...categoryIngredients);
		}
	});

	// Parse logic mode from URL query params
	const logicParam = url.searchParams.get('logic');
	const validLogicModes: LogicMode[] = ['AND', 'OR', 'NOT AND', 'NOT OR'];
	// Decode the logic param (handles URL encoding for spaces)
	const decodedLogicParam = logicParam ? decodeURIComponent(logicParam) : null;
	const logicMode: LogicMode =
		decodedLogicParam && validLogicModes.includes(decodedLogicParam as LogicMode)
			? (decodedLogicParam as LogicMode)
			: 'AND';

	return {
		cocktails: allCocktails,
		selectedTags,
		selectedIngredients,
		logicMode
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

// Helper function to get Ingredient objects by their slugs within a specific category
function getIngredientsBySlugsInCategory(
	slugs: string[],
	category: (typeof allIngredientCategories)[0]
): Ingredient[] {
	const allIngredients: Ingredient[] = [];

	// Collect all ingredients from this category's subcategories
	category.subcategories.forEach((subcategory) => {
		allIngredients.push(...subcategory.ingredients);
	});

	// Find matching ingredients by slug (case-insensitive)
	return slugs
		.map((slug) =>
			allIngredients.find((ingredient) => ingredient.slug.toLowerCase() === slug.toLowerCase())
		)
		.filter((ingredient): ingredient is Ingredient => ingredient !== undefined);
}
