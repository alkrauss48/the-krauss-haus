import type { Recipe } from '$lib/types/recipes';

const VANILLA_SYRUP: Recipe = {
	name: 'Vanilla Syrup',
	slug: 'vanilla-syrup',
	description: 'Rich simple syrup steeped with split vanilla beans.',
	ingredients: ['1 cup granulated sugar', '1 cup water', '1 vanilla bean, split and scraped'],
	instructions:
		'Add the water, split vanilla bean, and scraped seeds to a small saucepan. Heat over medium heat until the water is steaming and just beginning to simmer. Remove from the heat and pour everything into a mason jar. Cover and let cool, then steep for 12 hours. Strain the vanilla-infused water through a coffee filter to remove the pod and seeds. Measure the strained liquid and, if necessary, add enough water to bring it back to 1 cup. Return the vanilla-infused water to a saucepan. Add the sugar and heat gently, stirring until completely dissolved. Do not boil. Let cool, then bottle and refrigerate.',
	notes: 'Recipe makes about 1.5 cups. 2 tsp of vanilla extract can be substituted for the beans.'
};

export default VANILLA_SYRUP;
