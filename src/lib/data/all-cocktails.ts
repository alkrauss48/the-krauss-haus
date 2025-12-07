import type { Cocktail } from '$lib/types/cocktails';

// Import all cocktail data
import AMARETTO_SOUR from '$lib/data/cocktails/amaretto-sour';
import AMERICAN_TRILOGY from '$lib/data/cocktails/american-trilogy';
import AMERICANO from '$lib/data/cocktails/americano';
import ANCIENT_MARINER from '$lib/data/cocktails/ancient-mariner';
import BATANGA from '$lib/data/cocktails/batanga';
import BOULEVARDIER from '$lib/data/cocktails/boulevardier';
import CAIPIRINHA from '$lib/data/cocktails/caipirinha';
import CARAMEL_APPLE_SPICE from '$lib/data/cocktails/caramel-apple-spice';
import CHOCOLATE_COVERED_CHERRIES from '$lib/data/cocktails/chocolate-covered-cherries';
import COBRAS_FANG from '$lib/data/cocktails/cobras-fang';
import CUBA_LIBRE from '$lib/data/cocktails/cuba-libre';
import DAIQUIRI from '$lib/data/cocktails/daiquiri';
import DIVISION_BELL from '$lib/data/cocktails/division-bell';
import DONGA_PUNCH from '$lib/data/cocktails/donga-punch';
import ESPRESSO_MARTINI from '$lib/data/cocktails/espresso-martini';
import FERNET_CON_COCA from '$lib/data/cocktails/fernet-con-coca';
import FOREST_SPIRIT from '$lib/data/cocktails/forest-spirit';
import FRENCH_75 from '$lib/data/cocktails/french-75';
import GILDED_ROSE from '$lib/data/cocktails/gilded-rose';
import GIN_AND_TONIC from '$lib/data/cocktails/gin-and-tonic';
import GIN_BASIL_SMASH from '$lib/data/cocktails/gin-basil-smash';
import GLUHWEIN from '$lib/data/cocktails/gluhwein';
import HOT_TODDY from '$lib/data/cocktails/hot-toddy';
import HURRICANE from '$lib/data/cocktails/hurricane';
import IRON_RANGER from '$lib/data/cocktails/iron-ranger';
import JACK_ROSE from '$lib/data/cocktails/jack-rose';
import JET_PILOT from '$lib/data/cocktails/jet-pilot';
import JUNGLE_BIRD from '$lib/data/cocktails/jungle-bird';
import LAST_WORD from '$lib/data/cocktails/last-word';
import LOGGY_CAB from '$lib/data/cocktails/loggy-cab';
import MAI_TAI from '$lib/data/cocktails/mai-tai';
import MANHATTAN from '$lib/data/cocktails/manhattan';
import MARGARITA from '$lib/data/cocktails/margarita';
import MARTINI from '$lib/data/cocktails/martini';
import MERRY_MULE from '$lib/data/cocktails/merry-mule';
import MICHELADA from '$lib/data/cocktails/michelada';
import MINT_JULEP from '$lib/data/cocktails/mint-julep';
import MISSIONARYS_DOWNFALL from '$lib/data/cocktails/missionarys-downfall';
import MOJITO from '$lib/data/cocktails/mojito';
import MOONWELL from '$lib/data/cocktails/moonwell';
import NAKED_AND_FAMOUS from '$lib/data/cocktails/naked-and-famous';
import NAVY_GROG from '$lib/data/cocktails/navy-grog';
import NEGRONI from '$lib/data/cocktails/negroni';
import NEGRONI_BIANCO_BERGAMOTTO from '$lib/data/cocktails/negroni-bianco-bergamotto';
import OAXACA_OLD_FASHIONED from '$lib/data/cocktails/oaxaca-old-fashioned';
import OLD_FASHIONED from '$lib/data/cocktails/old-fashioned';
import PAINKILLER from '$lib/data/cocktails/painkiller';
import PALOMA from '$lib/data/cocktails/paloma';
import PAPER_PLANE from '$lib/data/cocktails/paper-plane';
import PENICILLIN from '$lib/data/cocktails/penicillin';
import PIMMS_CUP from '$lib/data/cocktails/pimms-cup';
import PORT_LIGHT from '$lib/data/cocktails/port-light';
import RADLER from '$lib/data/cocktails/radler';
import RAMOS_GIN_FIZZ from '$lib/data/cocktails/ramos-gin-fizz';
import RATTLE_SKULL from '$lib/data/cocktails/rattle-skull';
import SALTY_DOG from '$lib/data/cocktails/salty-dog';
import SANGRIA from '$lib/data/cocktails/sangria';
import SATURN from '$lib/data/cocktails/saturn';
import SAZERAC from '$lib/data/cocktails/sazerac';
import SEA_LEGS from '$lib/data/cocktails/sea-legs';
import SIDECAR from '$lib/data/cocktails/sidecar';
import SINGAPORE_SLING from '$lib/data/cocktails/singapore-sling';
import SPAGHETT from '$lib/data/cocktails/spaghett';
import SPRITZ from '$lib/data/cocktails/spritz';
import THREE_DOTS_AND_A_DASH from '$lib/data/cocktails/three-dots-and-a-dash';
import TI_PUNCH from '$lib/data/cocktails/ti-punch';
import TIA_MIA from '$lib/data/cocktails/tia-mia';
import TOM_AND_JERRY from '$lib/data/cocktails/tom-and-jerry';
import TORONTO from '$lib/data/cocktails/toronto';
import TRINIDAD_SOUR from '$lib/data/cocktails/trinidad-sour';
import VIEUX_CARRE from '$lib/data/cocktails/vieux-carre';
import WHISKEY_SOUR from '$lib/data/cocktails/whiskey-sour';
import ZOMBIE from '$lib/data/cocktails/zombie';

// Create array of all cocktails (sorted alphabetically)
export const allCocktails: Cocktail[] = [
	AMARETTO_SOUR,
	AMERICAN_TRILOGY,
	AMERICANO,
	ANCIENT_MARINER,
	BATANGA,
	BOULEVARDIER,
	CAIPIRINHA,
	CARAMEL_APPLE_SPICE,
	CHOCOLATE_COVERED_CHERRIES,
	COBRAS_FANG,
	CUBA_LIBRE,
	DAIQUIRI,
	DIVISION_BELL,
	DONGA_PUNCH,
	ESPRESSO_MARTINI,
	FERNET_CON_COCA,
	FRENCH_75,
	FOREST_SPIRIT,
	GILDED_ROSE,
	GIN_AND_TONIC,
	GIN_BASIL_SMASH,
	GLUHWEIN,
	HOT_TODDY,
	HURRICANE,
	IRON_RANGER,
	JACK_ROSE,
	JET_PILOT,
	JUNGLE_BIRD,
	LAST_WORD,
	LOGGY_CAB,
	MAI_TAI,
	MANHATTAN,
	MARGARITA,
	MARTINI,
	MERRY_MULE,
	MICHELADA,
	MINT_JULEP,
	MISSIONARYS_DOWNFALL,
	MOJITO,
	MOONWELL,
	NAKED_AND_FAMOUS,
	NAVY_GROG,
	NEGRONI,
	NEGRONI_BIANCO_BERGAMOTTO,
	OAXACA_OLD_FASHIONED,
	OLD_FASHIONED,
	PAINKILLER,
	PALOMA,
	PAPER_PLANE,
	PENICILLIN,
	PIMMS_CUP,
	PORT_LIGHT,
	RADLER,
	RAMOS_GIN_FIZZ,
	RATTLE_SKULL,
	SALTY_DOG,
	SANGRIA,
	SATURN,
	SAZERAC,
	SEA_LEGS,
	SIDECAR,
	SINGAPORE_SLING,
	SPAGHETT,
	SPRITZ,
	THREE_DOTS_AND_A_DASH,
	TI_PUNCH,
	TIA_MIA,
	TOM_AND_JERRY,
	TORONTO,
	TRINIDAD_SOUR,
	VIEUX_CARRE,
	WHISKEY_SOUR,
	ZOMBIE
].sort((a, b) => a.title.localeCompare(b.title));

// Create a map of all cocktails by slug for quick lookups
export const cocktailsBySlug = new Map<string, Cocktail>(
	allCocktails.map((cocktail) => [cocktail.slug, cocktail])
);
