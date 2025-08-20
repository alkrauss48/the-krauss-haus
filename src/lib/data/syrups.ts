import type { Recipe } from '$lib/types/recipes';

// Import all syrup recipes
import CARAMEL_SYRUP from '$lib/data/recipes/caramel-syrup';
import CINNAMON_SYRUP from '$lib/data/recipes/cinnamon-syrup';
import DEMERARA_SYRUP from '$lib/data/recipes/demerara-syrup';
import FASSIONOLA from '$lib/data/recipes/fassionola';
import GRENADINE from '$lib/data/recipes/grenadine';
import HONEY_GINGER_SYRUP from '$lib/data/recipes/honey-ginger-syrup';
import HONEY_SYRUP from '$lib/data/recipes/honey-syrup';
import ORGEAT from '$lib/data/recipes/orgeat';
import PASSIONFRUIT_SYRUP from '$lib/data/recipes/passionfruit-syrup';
import RICH_SIMPLE_SYRUP from '$lib/data/recipes/rich-simple-syrup';
import TOM_AND_JERRY_BATTER from '$lib/data/recipes/tom-and-jerry-batter';

export const syrups: Recipe[] = [
	CARAMEL_SYRUP,
	CINNAMON_SYRUP,
	DEMERARA_SYRUP,
	FASSIONOLA,
	GRENADINE,
	HONEY_GINGER_SYRUP,
	HONEY_SYRUP,
	ORGEAT,
	PASSIONFRUIT_SYRUP,
	RICH_SIMPLE_SYRUP,
	TOM_AND_JERRY_BATTER
];
