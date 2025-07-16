import type { Cocktail } from '$lib/types/cocktails';

export enum PartyNote {
	WELCOME = 'Welcome Drink',
	SMALL_BATCH = 'Small batch, only 4-5 servings',
	BIG_BATCH = 'Big batch, up to 10 servings'
}

export interface PartyTimeSlot {
	time: string;
	cocktail: Cocktail;
	note: PartyNote;
}

export interface NoteColorConfig {
	bgClass: string;
	textClass: string;
}

export const noteColors: Record<PartyNote, NoteColorConfig> = {
	[PartyNote.WELCOME]: {
		bgClass: 'bg-purple-100',
		textClass: 'text-purple-800'
	},
	[PartyNote.SMALL_BATCH]: {
		bgClass: 'bg-blue-100',
		textClass: 'text-blue-800'
	},
	[PartyNote.BIG_BATCH]: {
		bgClass: 'bg-green-100',
		textClass: 'text-green-800'
	}
};

import PIMMS_CUP from '$lib/data/cocktails/pimms-cup';
import HURRICANE from '$lib/data/cocktails/hurricane';
import SATURN from '$lib/data/cocktails/saturn';
import PAINKILLER from '$lib/data/cocktails/painkiller';
import IRON_RANGER from '$lib/data/cocktails/iron-ranger';
import SINGAPORE_SLING from '$lib/data/cocktails/singapore-sling';
import SPRITZ from '$lib/data/cocktails/spritz';
import ANCIENT_MARINER from '$lib/data/cocktails/ancient-mariner';
import PORT_LIGHT from '$lib/data/cocktails/port-light';

export const partySchedule: PartyTimeSlot[] = [
	{
		time: '4:00pm',
		cocktail: PIMMS_CUP,
		note: PartyNote.WELCOME
	},
	{
		time: '4:30pm',
		cocktail: HURRICANE,
		note: PartyNote.SMALL_BATCH
	},
	{
		time: '5:00pm',
		cocktail: SATURN,
		note: PartyNote.SMALL_BATCH
	},
	{
		time: '5:30pm',
		cocktail: PAINKILLER,
		note: PartyNote.BIG_BATCH
	},
	{
		time: '6:00pm',
		cocktail: IRON_RANGER,
		note: PartyNote.SMALL_BATCH
	},
	{
		time: '6:30pm',
		cocktail: SINGAPORE_SLING,
		note: PartyNote.SMALL_BATCH
	},
	{
		time: '7:00pm',
		cocktail: SPRITZ,
		note: PartyNote.BIG_BATCH
	},
	{
		time: '7:30pm',
		cocktail: ANCIENT_MARINER,
		note: PartyNote.SMALL_BATCH
	},
	{
		time: '8:00pm',
		cocktail: PORT_LIGHT,
		note: PartyNote.SMALL_BATCH
	}
];
