import { afterEach, describe, expect, it, vi } from 'vitest';
import { refreshHouse } from './house-refresh';

const checksum = 'a'.repeat(64);

function run(responses: Array<Response | Error>, delays = [1, 2]) {
	const fetch = vi.fn(async () => {
		const next = responses.shift();
		if (!next || next instanceof Error) throw next ?? new Error('no more responses');
		return next;
	});
	const sleep = vi.fn(async () => {});
	const result = refreshHouse({ url: 'http://bar', key: 'k', checksum, fetch, sleep, delays });
	return { fetch, sleep, result };
}

describe('refreshHouse', () => {
	afterEach(() => vi.restoreAllMocks());

	it('posts the checksum with the key and stops at 202', async () => {
		const { fetch, sleep, result } = run([new Response('{}', { status: 202 })]);

		expect(await result).toBe(true);
		expect(fetch).toHaveBeenCalledOnce();
		expect(sleep).not.toHaveBeenCalled();

		const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
		expect(url).toBe('http://bar/api/house/refresh');
		expect(init.method).toBe('POST');
		expect(init.headers).toMatchObject({ 'X-Bar-Key': 'k' });
		expect(JSON.parse(init.body as string)).toEqual({ checksum });
	});

	it('gives up without retrying on a 4xx', async () => {
		vi.spyOn(console, 'error').mockImplementation(() => {});
		const { fetch, sleep, result } = run([new Response('nope', { status: 401 })]);

		expect(await result).toBe(false);
		expect(fetch).toHaveBeenCalledOnce();
		expect(sleep).not.toHaveBeenCalled();
	});

	it('retries through 5xx and network errors with backoff', async () => {
		const { fetch, sleep, result } = run([
			new Response('', { status: 503 }),
			new Error('ECONNREFUSED'),
			new Response('{}', { status: 202 })
		]);

		expect(await result).toBe(true);
		expect(fetch).toHaveBeenCalledTimes(3);
		expect(sleep.mock.calls).toEqual([[1], [2]]);
	});

	it('stops once the delays run out', async () => {
		vi.spyOn(console, 'error').mockImplementation(() => {});
		const { fetch, result } = run([
			new Response('', { status: 500 }),
			new Response('', { status: 500 }),
			new Response('', { status: 500 }),
			new Response('{}', { status: 202 })
		]);

		expect(await result).toBe(false);
		expect(fetch).toHaveBeenCalledTimes(3);
	});
});
