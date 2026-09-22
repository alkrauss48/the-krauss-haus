/**
 * The identity kit. Rule one of the panel is that it is always obvious who is behind the bar,
 * which means the answer shows up in at least four places at once: the lit nameplate, the
 * bubble styling, the name above every answer, and the composer placeholder.
 *
 * Note this is a different concept from the site's `/bartenders` section, which catalogues 27
 * real and historical bartenders. Sasha and Eddie work here; everything about them stays
 * namespaced under `$lib/bar`.
 */

export type BartenderKey = 'sasha' | 'eddie';

export const BARTENDER_KEYS: BartenderKey[] = ['sasha', 'eddie'];

export type Bartender = {
	key: BartenderKey;
	name: string;
	/** The one-line role, shown on the nameplate under the name. */
	role: string;
	/** What they are grounded in — used in the empty state and the picker tooltip. */
	groundedIn: string;
	placeholder: string;
	/** Nameplate when lit. */
	plate: string;
	/** Nameplate when the other one is pouring. */
	plateDim: string;
	/** The answer bubble. */
	bubble: string;
	/** The name above an answer. */
	nameText: string;
	accentText: string;
	accentRule: string;
	accentDot: string;
};

export const bartenders: Record<BartenderKey, Bartender> = {
	sasha: {
		key: 'sasha',
		name: 'Sasha',
		role: 'the house bartender',
		groundedIn: "the Krauss Haus's own menus",
		placeholder: 'Ask Sasha…',
		plate: 'bg-amber-50 border-amber-300 text-amber-900 shadow-sm',
		plateDim: 'bg-white/60 border-gray-200 text-gray-400',
		bubble: 'bg-amber-50/70 border border-amber-100 rounded-2xl',
		nameText: 'text-amber-700',
		accentText: 'text-amber-700',
		accentRule: 'border-amber-400',
		accentDot: 'bg-amber-500'
	},
	eddie: {
		key: 'eddie',
		name: 'Eddie',
		role: 'uptown, 1936',
		groundedIn: 'a shelf of public-domain manuals',
		placeholder: 'Ask Eddie…',
		plate: 'bg-emerald-50 border-emerald-700/40 text-emerald-900 shadow-sm',
		plateDim: 'bg-white/60 border-gray-200 text-gray-400',
		// Squarer corners and a warmer paper tone, so his asides read as older stock.
		bubble: 'bg-[#fdfaf3] border border-amber-200/80 rounded-md',
		nameText: 'text-emerald-900',
		accentText: 'text-emerald-900',
		accentRule: 'border-amber-400',
		accentDot: 'bg-emerald-700'
	}
};

export const DEFAULT_BARTENDER: BartenderKey = 'sasha';

export function isBartenderKey(value: unknown): value is BartenderKey {
	return value === 'sasha' || value === 'eddie';
}

/** The other one — for the consult set piece. */
export function otherBartender(key: BartenderKey): BartenderKey {
	return key === 'sasha' ? 'eddie' : 'sasha';
}
