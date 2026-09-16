import type { CocktailParty } from '$lib/types/party';
import { NoteColor } from '$lib/types/party';

import PIMMS_CUP from '$lib/data/cocktails/pimms-cup';
import HURRICANE from '$lib/data/cocktails/hurricane';
import SATURN from '$lib/data/cocktails/saturn';
import PAINKILLER from '$lib/data/cocktails/painkiller';
import IRON_RANGER from '$lib/data/cocktails/iron-ranger';
import SINGAPORE_SLING from '$lib/data/cocktails/singapore-sling';
import SPRITZ from '$lib/data/cocktails/spritz';
import ANCIENT_MARINER from '$lib/data/cocktails/ancient-mariner';
import MAI_TAI from '$lib/data/cocktails/mai-tai';

const TIKI_PARTY_2025: CocktailParty = {
	slug: 'tiki-party-2025',
	name: 'Tiki Party',
	description: "Celebrating Aaron's 35th in style with tropical cocktails and good vibes",
	date: new Date(2025, 7, 9), // August 9, 2025 (month is 0-indexed, so 7 = August)
	schedule: [
		{
			time: '4:00pm',
			cocktail: PIMMS_CUP,
			note: { text: 'Welcome Drink', color: NoteColor.PURPLE }
		},
		{
			time: '4:30pm',
			cocktail: HURRICANE,
			note: { text: 'Small batch, only 4-5 servings', color: NoteColor.BLUE }
		},
		{
			time: '5:00pm',
			cocktail: SATURN,
			note: { text: 'Small batch, only 4-5 servings', color: NoteColor.BLUE }
		},
		{
			time: '5:30pm',
			cocktail: PAINKILLER,
			note: { text: 'Big batch, up to 10 servings', color: NoteColor.GREEN }
		},
		{
			time: '6:00pm',
			cocktail: ANCIENT_MARINER,
			note: { text: 'Small batch, only 4-5 servings', color: NoteColor.BLUE }
		},
		{
			time: '6:30pm',
			cocktail: SINGAPORE_SLING,
			note: { text: 'Small batch, only 4-5 servings', color: NoteColor.BLUE }
		},
		{
			time: '7:00pm',
			cocktail: SPRITZ,
			note: { text: 'Big batch, up to 10 servings', color: NoteColor.GREEN }
		},
		{
			time: '7:30pm',
			cocktail: IRON_RANGER,
			note: { text: 'Small batch, only 4-5 servings', color: NoteColor.BLUE }
		},
		{
			time: '8:00pm',
			cocktail: MAI_TAI,
			note: { text: 'Small batch, only 4-5 servings', color: NoteColor.BLUE }
		},
		{
			time: 'Next',
			title: 'Custom orders!',
			message: 'Find something you want to try? Order up!'
		}
	]
};

export default TIKI_PARTY_2025;
