import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

// Import all cocktail data
import AMARETTO_SOUR from '$lib/data/cocktails/amaretto-sour';
import ANCIENT_MARINER from '$lib/data/cocktails/ancient-mariner';
import CAIPIRINHA from '$lib/data/cocktails/caipirinha';
import CARAMEL_APPLE_SPICE from '$lib/data/cocktails/caramel-apple-spice';
import COBRAS_FANG from '$lib/data/cocktails/cobras-fang';
import DAIQUIRI from '$lib/data/cocktails/daiquiri';
import ESPRESSO_MARTINI from '$lib/data/cocktails/espresso-martini';
import FRENCH_75 from '$lib/data/cocktails/french-75';
import GLUHWEIN from '$lib/data/cocktails/gluhwein';
import HOT_TODDY from '$lib/data/cocktails/hot-toddy';
import HURRICANE from '$lib/data/cocktails/hurricane';
import IRON_RANGER from '$lib/data/cocktails/iron-ranger';
import JACK_ROSE from '$lib/data/cocktails/jack-rose';
import JET_PILOT from '$lib/data/cocktails/jet-pilot';
import JUNGLE_BIRD from '$lib/data/cocktails/jungle-bird';
import LOGGY_CAB from '$lib/data/cocktails/loggy-cab';
import MAI_TAI from '$lib/data/cocktails/mai-tai';
import MANHATTAN from '$lib/data/cocktails/manhattan';
import MARGARITA from '$lib/data/cocktails/margarita';
import MARTINI from '$lib/data/cocktails/martini';
import MERRY_MULE from '$lib/data/cocktails/merry-mule';
import MINT_JULEP from '$lib/data/cocktails/mint-julep';
import MOJITO from '$lib/data/cocktails/mojito';
import MOONWELL from '$lib/data/cocktails/moonwell';
import NEGRONI from '$lib/data/cocktails/negroni';
import OAXACA_OLD_FASHIONED from '$lib/data/cocktails/oaxaca-old-fashioned';
import OLD_FASHIONED from '$lib/data/cocktails/old-fashioned';
import PAINKILLER from '$lib/data/cocktails/painkiller';
import PAPER_PLANE from '$lib/data/cocktails/paper-plane';
import PENICILLIN from '$lib/data/cocktails/penicillin';
import PIMMS_CUP from '$lib/data/cocktails/pimms-cup';
import PORT_LIGHT from '$lib/data/cocktails/port-light';
import SATURN from '$lib/data/cocktails/saturn';
import SAZERAC from '$lib/data/cocktails/sazerac';
import SINGAPORE_SLING from '$lib/data/cocktails/singapore-sling';
import SPRITZ from '$lib/data/cocktails/spritz';
import THREE_DOTS_AND_A_DASH from '$lib/data/cocktails/three-dots-and-a-dash';
import TOM_AND_JERRY from '$lib/data/cocktails/tom-and-jerry';
import ZOMBIE from '$lib/data/cocktails/zombie';

// Create a map of all cocktails by slug
const cocktailsBySlug = new Map([
	[AMARETTO_SOUR.slug, AMARETTO_SOUR],
	[ANCIENT_MARINER.slug, ANCIENT_MARINER],
	[CAIPIRINHA.slug, CAIPIRINHA],
	[CARAMEL_APPLE_SPICE.slug, CARAMEL_APPLE_SPICE],
	[COBRAS_FANG.slug, COBRAS_FANG],
	[DAIQUIRI.slug, DAIQUIRI],
	[ESPRESSO_MARTINI.slug, ESPRESSO_MARTINI],
	[FRENCH_75.slug, FRENCH_75],
	[GLUHWEIN.slug, GLUHWEIN],
	[HOT_TODDY.slug, HOT_TODDY],
	[HURRICANE.slug, HURRICANE],
	[IRON_RANGER.slug, IRON_RANGER],
	[JACK_ROSE.slug, JACK_ROSE],
	[JET_PILOT.slug, JET_PILOT],
	[JUNGLE_BIRD.slug, JUNGLE_BIRD],
	[LOGGY_CAB.slug, LOGGY_CAB],
	[MAI_TAI.slug, MAI_TAI],
	[MANHATTAN.slug, MANHATTAN],
	[MARGARITA.slug, MARGARITA],
	[MARTINI.slug, MARTINI],
	[MERRY_MULE.slug, MERRY_MULE],
	[MINT_JULEP.slug, MINT_JULEP],
	[MOJITO.slug, MOJITO],
	[MOONWELL.slug, MOONWELL],
	[NEGRONI.slug, NEGRONI],
	[OAXACA_OLD_FASHIONED.slug, OAXACA_OLD_FASHIONED],
	[OLD_FASHIONED.slug, OLD_FASHIONED],
	[PAINKILLER.slug, PAINKILLER],
	[PAPER_PLANE.slug, PAPER_PLANE],
	[PENICILLIN.slug, PENICILLIN],
	[PIMMS_CUP.slug, PIMMS_CUP],
	[PORT_LIGHT.slug, PORT_LIGHT],
	[SATURN.slug, SATURN],
	[SAZERAC.slug, SAZERAC],
	[SINGAPORE_SLING.slug, SINGAPORE_SLING],
	[SPRITZ.slug, SPRITZ],
	[THREE_DOTS_AND_A_DASH.slug, THREE_DOTS_AND_A_DASH],
	[TOM_AND_JERRY.slug, TOM_AND_JERRY],
	[ZOMBIE.slug, ZOMBIE]
]);

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	const cocktail = cocktailsBySlug.get(slug);

	if (!cocktail) {
		throw error(404, `Cocktail "${slug}" not found`);
	}

	return {
		cocktail
	};
};
