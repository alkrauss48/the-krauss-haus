/**
 * The roster, so a third bartender hired in the API's config shows up here without a deploy.
 * Free upstream and not throttled, but memoised anyway — it changes about never.
 *
 * The roster is a convenience, not a dependency: if the call fails we answer with the pair we
 * know about rather than showing an empty picker.
 */

import { env } from '$env/dynamic/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export type RosterEntry = { key: string; name: string; blurb: string };

const TTL_MS = 5 * 60 * 1000;

const FALLBACK: RosterEntry[] = [
	{
		key: 'sasha',
		name: 'Sasha',
		blurb: "the house bartender, grounded in the Krauss Haus's own menus"
	},
	{
		key: 'eddie',
		name: 'Eddie',
		blurb: 'a 1930s uptown bartender, grounded in a shelf of public-domain manuals'
	}
];

let cache: { at: number; roster: RosterEntry[] } | null = null;

export const GET: RequestHandler = async () => {
	if (cache && Date.now() - cache.at < TTL_MS) {
		return json({ bartenders: cache.roster });
	}

	if (!env.BAR_API_URL || !env.BAR_API_KEY) {
		console.error('[bar] BAR_API_URL / BAR_API_KEY are not configured');
		return json({ bartenders: FALLBACK });
	}

	try {
		const upstream = await fetch(`${env.BAR_API_URL}/api/bartenders`, {
			headers: { Accept: 'application/json', 'X-Bar-Key': env.BAR_API_KEY },
			signal: AbortSignal.timeout(5_000)
		});
		if (!upstream.ok) throw new Error(`roster refused: ${upstream.status}`);

		const payload = (await upstream.json()) as { bartenders?: RosterEntry[] };
		const roster = Array.isArray(payload.bartenders) ? payload.bartenders : FALLBACK;
		cache = { at: Date.now(), roster };
		return json({ bartenders: roster });
	} catch (error) {
		console.error('[bar] roster unavailable', error);
		return json({ bartenders: FALLBACK });
	}
};
