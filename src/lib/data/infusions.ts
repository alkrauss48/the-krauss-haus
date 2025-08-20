import type { Recipe } from '$lib/types/recipes';

// Import all infusion recipes
import CARAMEL_VODKA from '$lib/data/recipes/caramel-vodka';
import FALERNUM from '$lib/data/recipes/falernum';
import JALAPENO_TEQUILA from '$lib/data/recipes/jalapeno-tequila';
import LIMONCELLO from '$lib/data/recipes/limoncello';
import PEPPERMINT_VODKA from '$lib/data/recipes/peppermint-vodka';

export const infusions: Recipe[] = [
	CARAMEL_VODKA,
	FALERNUM,
	JALAPENO_TEQUILA,
	LIMONCELLO,
	PEPPERMINT_VODKA
];
