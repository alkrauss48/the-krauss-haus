import type { CocktailCollection } from '$lib/types/cocktail-collection';

import NAUTILUS from '$lib/data/cocktails/nautilus';
import TIDAL_TERROR from '$lib/data/cocktails/tidal-terror';
import PIRANHA_POOL from '$lib/data/cocktails/piranha-pool';
import PINEAPPLE_POTION from '$lib/data/cocktails/pineapple-potion';
import PLUNDERERS_PUNCH from '$lib/data/cocktails/plunderers-punch';
import AULANI_TROPICAL_MAI_TAI from '$lib/data/cocktails/aulani-tropical-mai-tai';
import JINGLE_BIRD from '$lib/data/cocktails/jingle-bird';
import SIPPIN_SANTA from '$lib/data/cocktails/sippin-santa';
import YULE_TIDE from '$lib/data/cocktails/yule-tide';
import PUMPKIN_BUGGY from '$lib/data/cocktails/pumpkin-buggy';
import HEX_APPEAL from '$lib/data/cocktails/hex-appeal';

const TIKI_MUGS: CocktailCollection = {
	slug: 'tiki-mugs',
	title: 'Tiki Mugs',
	description:
		'Drinks made for specific mugs in our collection, each one served in its own tiki mug.',
	bgColors: {
		primary: '#dcfce7',
		secondary: '#f0fdf4',
		tertiary: '#ecfdf5',
		variationText: '#166534'
	},
	groups: [
		{
			heading: 'Disney',
			cocktails: [PLUNDERERS_PUNCH, TIDAL_TERROR, PIRANHA_POOL, NAUTILUS, AULANI_TROPICAL_MAI_TAI]
		},
		{
			heading: 'Halloween',
			cocktails: [PINEAPPLE_POTION, PUMPKIN_BUGGY, HEX_APPEAL]
		},
		{
			heading: 'Christmas',
			cocktails: [JINGLE_BIRD, SIPPIN_SANTA, YULE_TIDE]
		}
	]
};

export default TIKI_MUGS;
