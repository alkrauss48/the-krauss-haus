import type { Recipe } from '$lib/types/recipes';

const PERSIAN_SPICE_LIQUEUR: Recipe = {
	name: 'Persian Spice Liqueur',
	slug: 'persian-spice-liqueur',
	description: 'A spiced liqueur with notes of cardamom, rose, and vanilla.',
	ingredients: [
		'2.5C 40% ABV Vodka',
		'10g edible rose petals',
		'2 cardamom pods, cracked',
		'1/2 vanilla bean, split and scraped',
		'250g sugar',
		'1/4C distilled water'
	],
	instructions:
		'Combine the vodka, rose petals, cracked cardamom pods, and vanilla bean—including the scraped seeds—in a mason jar. Seal and steep for 24 hours, swirling every few hours. Strain through a fine-mesh strainer. For a clearer liqueur, strain again through cheesecloth or a coffee filter. Add the sugar and distilled water directly to the strained infusion. Seal and shake thoroughly. Continue shaking periodically until the sugar is completely dissolved, allowing it to sit overnight if necessary. Bottle and let rest for at least 5 days before using.',
	notes: 'Makes ~750mL at 31% ABV.'
};

export default PERSIAN_SPICE_LIQUEUR;
