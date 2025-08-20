import type { Recipe } from '$lib/types/recipes';
import { Tags } from '$lib/data/all-tags';

const PASSIONFRUIT_SYRUP: Recipe = {
	name: 'Passionfruit Syrup',
	slug: 'passionfruit-syrup',
	description: 'Made from passionfruit for a tart, tropical sweetness',
	ingredients: ['1 part (by weight) passionfruit puree', '2 parts (by volume) rich simple syrup'],
	instructions: 'Combine passionfruit puree and rich simple syrup (see recipe).',
	notes: 'Used in the Saturn and the Port Light.',
	tag: Tags.Syrups.PASSION_FRUIT_SYRUP
};

export default PASSIONFRUIT_SYRUP;
