import type { Category } from '$lib/types/cocktails';

import ANCIENT_MARINER from '$lib/data/cocktails/ancient-mariner';
import COBRAS_FANG from '$lib/data/cocktails/cobras-fang';
import GILDA from '$lib/data/cocktails/gilda';
import HURRICANE from '$lib/data/cocktails/hurricane';
import IRON_RANGER from '$lib/data/cocktails/iron-ranger';
import JUNGLE_BIRD from '$lib/data/cocktails/jungle-bird';
import MAI_TAI from '$lib/data/cocktails/mai-tai';
import NORWEIGAN_PARALYSIS from '$lib/data/cocktails/norwegian-paralysis';
import PAINKILLER from '$lib/data/cocktails/painkiller';
import PORT_LIGHT from '$lib/data/cocktails/port-light';
import SATURN from '$lib/data/cocktails/saturn';
import SINGAPORE_SLING from '$lib/data/cocktails/singapore-sling';
import THREE_DOTS_AND_A_DASH from '$lib/data/cocktails/three-dots-and-a-dash';
import ZOMBIE from '$lib/data/cocktails/zombie';
import LOST_LAKE from '$lib/data/cocktails/lost-lake';
import RUM_BARREL from '$lib/data/cocktails/rum-barrel';
import DONGA_PUNCH from '$lib/data/cocktails/donga-punch';
import PLANTERS_PUNCH from '$lib/data/cocktails/planters-punch';

export const categories: Category[] = [
	{
		title: 'Bright and Tropical',
		bgColors: {
			primary: '#dcfce7',
			secondary: '#f0fdf4',
			tertiary: '#ecfdf5',
			variationText: '#166534'
		},
		cocktails: [PAINKILLER, JUNGLE_BIRD, ANCIENT_MARINER, DONGA_PUNCH, HURRICANE, PLANTERS_PUNCH]
	},
	{
		title: 'Bold and Boozy',
		bgColors: {
			primary: '#fae8ff',
			secondary: '#fce7f3',
			tertiary: '#fdf2f8',
			variationText: '#581c87'
		},
		cocktails: [LOST_LAKE, MAI_TAI, THREE_DOTS_AND_A_DASH, RUM_BARREL, COBRAS_FANG, ZOMBIE]
	},
	{
		title: 'Not Just Rum',
		bgColors: {
			primary: '#fff7ed',
			secondary: '#ffedd5',
			tertiary: '#fef3c7',
			variationText: '#9a3412'
		},
		cocktails: [SINGAPORE_SLING, SATURN, GILDA, IRON_RANGER, PORT_LIGHT, NORWEIGAN_PARALYSIS]
	}
];
