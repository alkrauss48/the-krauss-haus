import type { Tag, TagCategory } from '$lib/types/tags';

export const INFUSIONS: TagCategory = {
	label: 'Infusions',
	color: '#007ACC' // tiki blue
};

// Infusion Tags
export const CARAMEL_VODKA: Tag = { label: 'Caramel Vodka', category: INFUSIONS };
export const FALERNUM: Tag = { label: 'Falernum', category: INFUSIONS };
export const JALAPENO_TEQUILA: Tag = { label: 'Jalapeno Tequila', category: INFUSIONS };
export const LIMONCELLO: Tag = { label: 'Limoncello', category: INFUSIONS };
export const PEPPEMINT_VODKA: Tag = { label: 'Peppermint Vodka', category: INFUSIONS };
