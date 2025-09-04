import type { Recipe } from '$lib/types/recipes';

const PERSIAN_SPICE_LIQUEUR: Recipe = {
	name: 'Persian Spice Liqueur',
	slug: 'persian-spice-liqueur',
	description: 'A spiced liqueur with notes of cardamom, rose, and vanilla.',
	ingredients: [
		'250mL Everclear',
		'400mL distilled water',
		'10g edible rose petals',
		'1 cardamom pod, cracked',
		'1/2 vanilla bean, split and scraped',
		'250g Sugar'
	],
	instructions:
		'Steep everclear, 250mL water, rose petals, cardamom, and vanilla in a mason jar for 24 hours, swirling every few hours. Strain. Heat remaining 150mL water and sugar until dissolved. Combine with alcohol and let rest for at least 5 days.',
	notes: 'Makes ~750mL at 31% ABV.'
};

export default PERSIAN_SPICE_LIQUEUR;
