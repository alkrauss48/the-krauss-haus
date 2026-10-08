import { building, dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { refreshHouse } from '$lib/server/house-refresh';
import type { ServerInit } from '@sveltejs/kit';
// Bundled at build time, so it is the checksum of the export *this* build serves. Fetching
// the site's own /data/manifest.json instead could reach the old pod mid-rollout.
import manifest from '../static/data/manifest.json';

export const init: ServerInit = () => {
	// `building` is true while prerendering, when there is no server to speak of;
	// `dev` because `npm run dev` restarts on every config change.
	if (building || dev) return;
	if (!env.BAR_API_URL || !env.BAR_API_KEY) return;

	// Not awaited: `init` holds back every request until it resolves, and the site
	// shouldn't wait for the bar.
	void refreshHouse({ url: env.BAR_API_URL, key: env.BAR_API_KEY, checksum: manifest.checksum });
};
