/**
 * The status line is the single most important piece of this UI: it is always in exactly one
 * known state, so a guest never wonders whether anything is happening.
 *
 * A tool call can take fifteen seconds, and fifteen seconds of a static line reads as broken.
 * So each state has a ladder — same state, evolving copy, driven by elapsed time — that
 * advances forward only. Looping back to the first rung reads as a stuck spinner.
 */

import type { BartenderKey } from './bartenders';
import { bartenders, otherBartender } from './bartenders';

export type Rung = { at: number; text: string };

/** Picks the last rung whose threshold has passed. Forward-only by construction. */
export function climb(ladder: Rung[], elapsedMs: number): string {
	let text = ladder[0]?.text ?? '';
	for (const rung of ladder) {
		if (elapsedMs >= rung.at) text = rung.text;
	}
	return text;
}

const thinking: Record<BartenderKey, Rung[]> = {
	sasha: [
		{ at: 0, text: "Sasha's thinking it over…" },
		{ at: 8000, text: '…still thinking.' },
		{ at: 16000, text: "…this one's worth getting right." },
		{ at: 25000, text: '…a good answer takes a minute.' },
		{ at: 45000, text: "…still going. Nobody's forgotten you." }
	],
	eddie: [
		{ at: 0, text: "Eddie's thinking it over…" },
		{ at: 8000, text: '…still turning it over, friend.' },
		{ at: 16000, text: '…he wants to get this one right.' },
		{ at: 25000, text: '…a good answer takes a minute.' },
		{ at: 45000, text: "…still going. Nobody's forgotten you." }
	]
};

/**
 * Keyed on the exact strings the API sends today (`config('bar.labels')` over there). A label
 * we do not recognise still gets shown verbatim with a generic icon — a tool added next year
 * should surface, not vanish.
 */
const toolLadders: Record<string, Rung[]> = {
	'reaching for the books': [
		{ at: 0, text: 'reaching for the books' },
		{ at: 8000, text: "…it's on the high shelf." },
		{ at: 16000, text: "…he's got the ladder out." },
		{ at: 25000, text: '…dust everywhere back here.' },
		{ at: 45000, text: "…still going. Nobody's forgotten you." }
	],
	"counting what's on the shelf": [
		{ at: 0, text: "counting what's on the shelf" },
		{ at: 8000, text: '…second row from the back.' },
		{ at: 16000, text: '…and the bottles behind the bottles.' },
		{ at: 25000, text: '…nearly through the well.' },
		{ at: 45000, text: "…still going. Nobody's forgotten you." }
	],
	'checking the house pages': [
		{ at: 0, text: 'checking the house pages' },
		{ at: 8000, text: "…she's got the binder open." },
		{ at: 16000, text: '…flipping past the syrups.' },
		{ at: 25000, text: '…nearly there.' },
		{ at: 45000, text: "…still going. Nobody's forgotten you." }
	],
	'running an eye down the menus': [
		{ at: 0, text: 'running an eye down the menus' },
		{ at: 8000, text: '…summer, winter, tiki.' },
		{ at: 16000, text: '…one of these is right.' },
		{ at: 25000, text: '…narrowing it down.' },
		{ at: 45000, text: "…still going. Nobody's forgotten you." }
	]
};

export type ToolIcon = 'book' | 'tally' | 'cards' | 'menu' | 'phone' | 'shaker';

const toolIcons: Record<string, ToolIcon> = {
	'reaching for the books': 'book',
	"counting what's on the shelf": 'tally',
	'checking the house pages': 'cards',
	'running an eye down the menus': 'menu'
};

export function iconForLabel(label: string): ToolIcon {
	if (isConsultLabel(label)) return 'phone';
	return toolIcons[label.toLowerCase()] ?? 'shaker';
}

/**
 * Matched loosely on purpose: a copy change upstream should degrade to "some tool is running",
 * not to a broken set piece. Exact equality would be brittle.
 */
export function isConsultLabel(label: string): boolean {
	const lower = label.toLowerCase();
	return lower.includes('calling') && (lower.includes('sasha') || lower.includes('eddie'));
}

export function consultTargetFrom(label: string): BartenderKey | null {
	if (!label.toLowerCase().includes('calling')) return null;
	if (label.toLowerCase().includes('sasha')) return 'sasha';
	if (label.toLowerCase().includes('eddie')) return 'eddie';
	return null;
}

export function thinkingLine(who: BartenderKey, elapsedMs: number): string {
	return climb(thinking[who], elapsedMs);
}

export function toolLine(label: string, elapsedMs: number): string {
	const ladder = toolLadders[label.toLowerCase()];
	// An unrecognised label has no ladder, so it simply stands — still better than silence.
	return ladder ? climb(ladder, elapsedMs) : label;
}

/** The set piece's own ladder: the phone is off the hook and the line is ringing. */
export function consultLine(who: BartenderKey, elapsedMs: number): string {
	const them = bartenders[otherBartender(who)].name;
	return climb(
		[
			{ at: 0, text: `${bartenders[who].name}'s calling ${them} over…` },
			{ at: 6000, text: "…it's ringing." },
			{ at: 14000, text: "…the line's crackly — it's 1936 over there." },
			{ at: 24000, text: `…${them}'s putting a glass down.` },
			{ at: 45000, text: '…still ringing. Nobody hangs up here.' }
		],
		elapsedMs
	);
}

export function idleLine(who: BartenderKey, hasAnswered: boolean): string {
	if (who === 'sasha') return hasAnswered ? "Sasha's listening." : "Sasha's behind the bar.";
	return hasAnswered ? "Eddie's all ears, friend." : "Eddie's polishing a glass.";
}

export function stoppedLine(who: BartenderKey): string {
	return who === 'sasha' ? 'Cut short. Ask again whenever.' : 'Said no more of it.';
}

export function resumeLine(who: BartenderKey): string {
	return `${bartenders[who].name}'s taking it from here…`;
}

/** The divider that drops into the transcript when the guest swaps bartenders. */
export function handoverLine(from: BartenderKey, to: BartenderKey): string {
	const leaving = bartenders[from].name;
	const arriving = bartenders[to].name;
	return `${leaving} wipes down the bar and steps away. ${arriving} takes over the well.`;
}
