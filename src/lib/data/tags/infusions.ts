import type { Tag, TagCategory } from '$lib/types/tags';

export const INFUSIONS: TagCategory = {
	label: 'Infusions',
	color: '#007ACC' // tiki blue
};

// Infusion Tags
const CARAMEL_VODKA: Tag = { label: 'Caramel Vodka', category: INFUSIONS };
const FALERNUM: Tag = { label: 'Falernum', category: INFUSIONS };
const JALAPENO_TEQUILA: Tag = { label: 'Jalapeno Tequila', category: INFUSIONS };
const LIMONCELLO: Tag = { label: 'Limoncello', category: INFUSIONS };
const PEPPEMINT_VODKA: Tag = { label: 'Peppermint Vodka', category: INFUSIONS };

export const TAGS = {
	CARAMEL_VODKA,
	FALERNUM,
	JALAPENO_TEQUILA,
	LIMONCELLO,
	PEPPEMINT_VODKA
};
