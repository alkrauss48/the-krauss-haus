/**
 * Sasha answers from the API's own copy of this site's exported data. Telling the API to
 * refresh that copy as the server boots means a redeploy of the site is all it takes for the
 * bar to learn a new cocktail — nobody has to remember to run `house:refresh` by hand.
 *
 * The API answers 202 at once and does the work afterwards, so there is nothing to wait for
 * beyond getting the request accepted.
 */

export const RETRY_DELAYS_MS = [5_000, 15_000, 30_000, 60_000, 120_000];

export type HouseRefreshOptions = {
	url: string;
	key: string;
	/** From this build's `static/data/manifest.json`, so the API waits for this export. */
	checksum: string;
	fetch?: typeof fetch;
	sleep?: (ms: number) => Promise<void>;
	delays?: number[];
};

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/** Resolves `true` once the API accepts the refresh, `false` if it never does. */
export async function refreshHouse({
	url,
	key,
	checksum,
	fetch: fetcher = fetch,
	sleep = wait,
	delays = RETRY_DELAYS_MS
}: HouseRefreshOptions): Promise<boolean> {
	for (let attempt = 0; attempt <= delays.length; attempt++) {
		try {
			// A plain timeout signal is fine here, unlike the ask proxy: this response is a
			// one-line JSON body, not a stream we need to keep open.
			const res = await fetcher(`${url}/api/house/refresh`, {
				method: 'POST',
				headers: {
					'X-Bar-Key': key,
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({ checksum }),
				signal: AbortSignal.timeout(10_000)
			});

			if (res.status === 202) return true;

			// 401/422 are configuration bugs: retrying will not fix them.
			if (res.status < 500) {
				console.error(`[bar] house refresh refused: ${res.status} ${await res.text()}`);
				return false;
			}
		} catch {
			// The API may be redeploying too; fall through to the retry.
		}

		const delay = delays[attempt];
		if (delay === undefined) break;
		await sleep(delay);
	}

	console.error('[bar] house refresh: the API never accepted the request');
	return false;
}
