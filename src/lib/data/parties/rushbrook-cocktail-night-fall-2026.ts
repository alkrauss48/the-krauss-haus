import type { CocktailParty } from '$lib/types/party';
import { NoteColor } from '$lib/types/party';

import JACK_ROSE from '$lib/data/cocktails/jack-rose';
import OLD_FASHIONED from '$lib/data/cocktails/old-fashioned';
import CAIPIRINHA from '$lib/data/cocktails/caipirinha';

const RUSHBROOK_COCKTAIL_NIGHT: CocktailParty = {
	slug: 'rushbrook-cocktail-night-fall-2026',
	name: 'Rushbrook Cocktail Night',
	description: 'An evening of classic cocktails with the Rushbrook crew',
	date: new Date(2026, 9, 3), // October 3, 2026 (month is 0-indexed, so 9 = October)
	schedule: [
		{
			time: '6:15pm',
			cocktail: JACK_ROSE,
			note: {
				text: 'First we start off with a historical American shaken cocktail',
				color: NoteColor.PURPLE
			}
		},
		{
			time: '6:45pm',
			cocktail: OLD_FASHIONED,
			note: { text: 'Next we move on to a classic stirred cocktail', color: NoteColor.BLUE }
		},
		{
			time: '7:15pm',
			cocktail: CAIPIRINHA,
			note: {
				text: 'Then we finish off with a Brazilian cocktail built right in the glass',
				color: NoteColor.GREEN
			}
		},
		{
			time: 'Fin',
			title: "That's it!",
			message: "Let's chat and see what we want to try next time!"
		}
	]
};

export default RUSHBROOK_COCKTAIL_NIGHT;
