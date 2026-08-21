import type { Recipe } from '$lib/types/recipes';

const MAMA_JUANA: Recipe = {
	name: 'Mama Juana',
	slug: 'mama-juana',
	description: 'A Dominican infusion of rum, red wine, and honey steeped over bark and spices.',
	ingredients: [
		'1 pack Don Ramon herbs and spices (750mL size)',
		'8 oz dark rum (like Brugal Añejo)',
		'5 oz sweet red wine (like a Spanish Tempranillo)',
		'3 oz honey'
	],
	instructions:
		'Add the herbs and spices to an empty 750mL bottle. If the spices are new, condition them first: cover with red wine, let rest for 2 days, then discard the wine. Add the rum, wine, and honey, then let rest for at least a week before pouring. As the bottle empties, top it back up with a fresh blend so the spices always stay wet.',
	notes:
		"Makes a full 750mL bottle at ~24% ABV. A set of spices will last about 10 refills before it needs replacing. You can buy the Don Ramon packet on Amazon (and it's FDA approved)."
};

export default MAMA_JUANA;
