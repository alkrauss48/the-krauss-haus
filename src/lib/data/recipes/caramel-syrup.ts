import type { Recipe } from '$lib/types/recipes';

const CARAMEL_SYRUP: Recipe = {
	name: 'Caramel Syrup',
	slug: 'caramel-syrup',
	description: 'A thick, non-fat caramel syrup',
	ingredients: ['1/2 cup granulated sugar', '1/2 cup water', '1/2 tsp vanilla extract'],
	instructions:
		'Combine 1/4 cup water and all of the sugar in a saucepan. Cook over medium heat until sugar is dissolved. Cover, and continue boiling until sugar turns amber (about 10-15 minutes). Remove from heat cool slightly, and CAREFULLY add the remaining sugar. Stir until dissolved. Add vanilla extract.',
	notes:
		'Used to make caramel vodka, which is used in the Caramel Apple Spice. Recipe makes about 1/2 cup.'
};

export default CARAMEL_SYRUP;
