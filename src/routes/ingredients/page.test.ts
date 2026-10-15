import { describe, it, expect } from 'vitest';
import { load } from './+page';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const run = (search = '') => (load as any)({ url: new URL(`https://x.test/ingredients${search}`) });

describe('/ingredients load', () => {
	it('defaults to an empty search term', () => {
		expect(run().searchTerm).toBe('');
	});

	it('passes the search term through', () => {
		expect(run('?search=lime%20juice').searchTerm).toBe('lime juice');
	});

	it('treats an empty search param as no search', () => {
		expect(run('?search=').searchTerm).toBe('');
	});
});
