import type { CocktailPath } from '$lib/types/cocktail-path';
import CAIPIRINHA from '../cocktails/caipirinha';
import LOST_LAKE from '../cocktails/lost-lake';
import SEA_LEGS from '../cocktails/sea-legs';
import SHARKS_TOOTH from '../cocktails/sharks-tooth';
import SPAGHETT from '../cocktails/spaghett';

export const FISHERMAN: CocktailPath = {
	title: 'Fisherman',
	subtitle: 'Breezy. Refreshing. Shoreline-ready.',
	slug: 'fisherman',
	imagePath:
		'https://personal-k8s-main-space.nyc3.cdn.digitaloceanspaces.com/thekrausshaus.com/images/paths/fisherman.jpeg',
	description:
		'Kick off your shoes and unwind by the water. This path starts with muddled cachaça simplicity, drifts into a low-ABV bitter-beer cooler, picks up tropical fruit and rum from a sidecar pour, deepens into a bittersweet tiki blend, and finishes with a smoky-briny scotch-and-mezcal sour that tastes of the sea itself.',
	cocktails: [CAIPIRINHA, SPAGHETT, SHARKS_TOOTH, LOST_LAKE, SEA_LEGS]
};
