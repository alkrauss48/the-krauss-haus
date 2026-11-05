import type { Recipe } from '$lib/types/recipes';

const CREME_DE_CACAO: Recipe = {
	name: 'Crème de Cacao',
	slug: 'creme-de-cacao',
	description: 'A chocolate-flavored liqueur made from cacao nibs.',
	ingredients: ['4oz (by weight) Cacao nibs', '12oz 50% ABV Vodka', '215g Water', '185g Sugar'],
	instructions:
		'Toast the cacao nibs at 275°F for 5 minutes, shaking once, until fragrant. Allow them to cool completely. Combine the cacao nibs and vodka, and infuse for 7 days, shaking gently once daily. Strain thoroughly without aggressively squeezing the nibs. Add the water and sugar. The sugar will dissolve over 1-2 days with period shaking. Bottle and let rest at least 2 weeks. Flavors improve over months.',
	notes:
		'Makes ~21oz at ~25% ABV. I prefer to use Navitas Organics - Unsweetened Organic Cacao Nibs for this recipe.'
};

export default CREME_DE_CACAO;
