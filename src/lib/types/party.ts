import type { Cocktail } from '$lib/types/cocktails';

export enum PartyNote {
	WELCOME = 'Welcome Drink',
	SMALL_BATCH = 'Small batch, only 4-5 servings',
	BIG_BATCH = 'Big batch, up to 10 servings'
}

export interface CocktailParty {
	slug: string;
	name: string;
	description: string;
	date: Date;
	schedule: PartyTimeSlot[];
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
