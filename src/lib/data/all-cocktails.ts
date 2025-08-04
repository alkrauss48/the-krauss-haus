import type { Cocktail } from '$lib/types/cocktails';

// Import all cocktail data
import AMARETTO_SOUR from '$lib/data/cocktails/amaretto-sour';
import ANCIENT_MARINER from '$lib/data/cocktails/ancient-mariner';
import CAIPIRINHA from '$lib/data/cocktails/caipirinha';
import CARAMEL_APPLE_SPICE from '$lib/data/cocktails/caramel-apple-spice';
import COBRAS_FANG from '$lib/data/cocktails/cobras-fang';
import DAIQUIRI from '$lib/data/cocktails/daiquiri';
import ESPRESSO_MARTINI from '$lib/data/cocktails/espresso-martini';
import FERNET_CON_COCA from '$lib/data/cocktails/fernet-con-coca';
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
import RAMOS_GIN_FIZZ from '$lib/data/cocktails/ramos-gin-fizz';
import SATURN from '$lib/data/cocktails/saturn';
import SAZERAC from '$lib/data/cocktails/sazerac';
import SINGAPORE_SLING from '$lib/data/cocktails/singapore-sling';
import SPAGHETT from '$lib/data/cocktails/spaghett';
import SPRITZ from '$lib/data/cocktails/spritz';
import THREE_DOTS_AND_A_DASH from '$lib/data/cocktails/three-dots-and-a-dash';
import TOM_AND_JERRY from '$lib/data/cocktails/tom-and-jerry';
import ZOMBIE from '$lib/data/cocktails/zombie';

// Create array of all cocktails (sorted alphabetically)
export const allCocktails: Cocktail[] = [
	AMARETTO_SOUR,
	ANCIENT_MARINER,
	CAIPIRINHA,
	CARAMEL_APPLE_SPICE,
	COBRAS_FANG,
	DAIQUIRI,
	ESPRESSO_MARTINI,
	FERNET_CON_COCA,
	FRENCH_75,
	GLUHWEIN,
	HOT_TODDY,
	HURRICANE,
	IRON_RANGER,
	JACK_ROSE,
	JET_PILOT,
	JUNGLE_BIRD,
	LOGGY_CAB,
	MAI_TAI,
	MANHATTAN,
	MARGARITA,
	MARTINI,
	MERRY_MULE,
	MINT_JULEP,
	MOJITO,
	MOONWELL,
	NEGRONI,
	OAXACA_OLD_FASHIONED,
	OLD_FASHIONED,
	PAINKILLER,
	PAPER_PLANE,
	PENICILLIN,
	PIMMS_CUP,
	PORT_LIGHT,
	RAMOS_GIN_FIZZ,
	SATURN,
	SAZERAC,
	SINGAPORE_SLING,
	SPAGHETT,
	SPRITZ,
	THREE_DOTS_AND_A_DASH,
	TOM_AND_JERRY,
	ZOMBIE
].sort((a, b) => a.title.localeCompare(b.title));

// Create a map of all cocktails by slug for quick lookups
export const cocktailsBySlug = new Map<string, Cocktail>(
	allCocktails.map((cocktail) => [cocktail.slug, cocktail])
);
