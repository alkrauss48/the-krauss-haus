import type { Cocktail } from '$lib/types/cocktails';

export enum NoteColor {
	PURPLE = 'purple',
	BLUE = 'blue',
	GREEN = 'green',
	AMBER = 'amber',
	RED = 'red',
	GRAY = 'gray'
}

export interface PartyNote {
	text: string;
	color: NoteColor;
}

export interface CocktailParty {
	slug: string;
	name: string;
	description: string;
	date: Date;
	schedule: PartyTimeSlot[];
}

interface BasePartyTimeSlot {
	time: string;
	note?: PartyNote;
}

export interface CocktailTimeSlot extends BasePartyTimeSlot {
	cocktail: Cocktail;
}

export interface MessageTimeSlot extends BasePartyTimeSlot {
	title: string;
	message: string;
}

export type PartyTimeSlot = CocktailTimeSlot | MessageTimeSlot;

export function isCocktailSlot(slot: PartyTimeSlot): slot is CocktailTimeSlot {
	return 'cocktail' in slot;
}

export interface NoteColorConfig {
	bgClass: string;
	textClass: string;
}

export const noteColors: Record<NoteColor, NoteColorConfig> = {
	[NoteColor.PURPLE]: {
		bgClass: 'bg-purple-100',
		textClass: 'text-purple-800'
	},
	[NoteColor.BLUE]: {
		bgClass: 'bg-blue-100',
		textClass: 'text-blue-800'
	},
	[NoteColor.GREEN]: {
		bgClass: 'bg-green-100',
		textClass: 'text-green-800'
	},
	[NoteColor.AMBER]: {
		bgClass: 'bg-amber-100',
		textClass: 'text-amber-800'
	},
	[NoteColor.RED]: {
		bgClass: 'bg-red-100',
		textClass: 'text-red-800'
	},
	[NoteColor.GRAY]: {
		bgClass: 'bg-gray-100',
		textClass: 'text-gray-800'
	}
};
