import type { Category } from '$lib/types/cocktails';

import JUNGLE_BIRD from '$lib/data/cocktails/jungle-bird';
import PAINKILLER from '$lib/data/cocktails/painkiller';
import ANCIENT_MARINER from '$lib/data/cocktails/ancient-mariner';
import HURRICANE from '$lib/data/cocktails/hurricane';
import MAI_TAI from '$lib/data/cocktails/mai-tai';
import THREE_DOTS_AND_A_DASH from '$lib/data/cocktails/three-dots-and-a-dash';
import JET_PILOT from '$lib/data/cocktails/jet-pilot';
import COBRAS_FANG from '$lib/data/cocktails/cobras-fang';
import SINGAPORE_SLING from '$lib/data/cocktails/singapore-sling';
import SATURN from '$lib/data/cocktails/saturn';
import PORT_LIGHT from '$lib/data/cocktails/port-light';
import IRON_RANGER from '$lib/data/cocktails/iron-ranger';

export const categories: Category[] = [
	{
		title: 'Bright and Tropical',
		bgColors: {
			primary: '#dcfce7',
			secondary: '#f0fdf4',
			tertiary: '#ecfdf5',
			variationText: '#166534'
		},
		cocktails: [PAINKILLER, JUNGLE_BIRD, ANCIENT_MARINER, HURRICANE]
	},
	{
		title: 'Bold and Boozy',
		bgColors: {
			primary: '#fae8ff',
			secondary: '#fce7f3',
			tertiary: '#fdf2f8',
			variationText: '#581c87'
		},
		cocktails: [MAI_TAI, THREE_DOTS_AND_A_DASH, JET_PILOT, COBRAS_FANG]
	},
	{
		title: 'Not Just Rum',
		bgColors: {
			primary: '#fff7ed',
			secondary: '#ffedd5',
			tertiary: '#fef3c7',
			variationText: '#9a3412'
		},
		cocktails: [SINGAPORE_SLING, SATURN, PORT_LIGHT, IRON_RANGER]
	}
];
