import type { Tag, TagCategory } from '$lib/types/tags';

export const INFUSIONS: TagCategory = {
	label: 'Homemade Infusions',
	color: '#8b5cf6' // softer violet purple
};

// Infusion Tags
const FALERNUM: Tag = { label: 'Falernum', category: INFUSIONS, order: 1 };
const CARAMEL_VODKA: Tag = { label: 'Caramel Vodka', category: INFUSIONS, order: 2 };
const JALAPENO_TEQUILA: Tag = { label: 'Jalapeno Tequila', category: INFUSIONS, order: 3 };
const PEPPEMINT_VODKA: Tag = { label: 'Peppermint Vodka', category: INFUSIONS, order: 4 };
const LIMONCELLO: Tag = { label: 'Limoncello', category: INFUSIONS, order: 5 };

export const TAGS = {
	CARAMEL_VODKA,
	FALERNUM,
	JALAPENO_TEQUILA,
	LIMONCELLO,
	PEPPEMINT_VODKA
};
