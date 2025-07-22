import { CocktailMethod } from '$lib/enums/methods';
import type { Cocktail } from '$lib/types/cocktails';

const MOONWELL: Cocktail = {
	title: 'Moonwell',
	subtitle: 'A Krauss Family original',
	description: 'Light rum, elderflower liqueur, grenadine, celery bitters, lemon, soda water.',
	imagePath: '/images/cocktails/summer/moonwell.png',
	slug: 'moonwell',
	method: CocktailMethod.Built,
	ingredients: [
		'1oz Light rum',
		'1oz Elderflower liqueur',
		'.5oz Grenadine',
		'1/4 lemon, juiced',
		'1 dash celery bitters',
		'4oz Soda water',
		'Garnish: Lemon wheel'
	],
	variations: [
		{
			name: "Valden's",
			description: 'Sub beer for soda water.',
			images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_hunter.jpg']
		},
		{
			name: "Qweenanne's",
			description: 'Sub tonic water for soda water.',
			images: ['/images/wow/race_human_female.jpg', '/images/wow/class_warlock.jpg']
		},
		{
			name: "Pounders'",
			description: 'Sub gin for rum.',
			images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_hunter.jpg']
		},
		{
			name: "Troker's",
			description: 'Sub ginger beer for soda water.',
			images: ['/images/wow/race_nightelf_male.jpg', '/images/wow/class_rogue.jpg']
		},
		{
			name: "Tippindeg's",
			description: 'TBD',
			images: ['/images/wow/race_dwarf_male.jpg', '/images/wow/class_priest.jpg']
		}
	]
};

export default MOONWELL;
