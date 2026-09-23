/**
 * The bartenders author their own hrefs, so this is a security boundary rather than a
 * formatting helper: `[click](javascript:…)` renders as a working anchor in Svelte even
 * though nothing here goes near `@html`.
 */
import { describe, it, expect } from 'vitest';
import { classifyLink } from './links';

describe('classifyLink', () => {
	it("treats the site's own absolute URLs as internal navigations", () => {
		expect(classifyLink('https://thekrausshaus.com/cocktails/gin-basil-smash')).toEqual({
			kind: 'internal',
			path: '/cocktails/gin-basil-smash'
		});
		expect(classifyLink('https://www.thekrausshaus.com/paths/x')).toEqual({
			kind: 'internal',
			path: '/paths/x'
		});
	});

	it('keeps the query string and hash on an internal path', () => {
		expect(classifyLink('https://thekrausshaus.com/cocktails?gin=1#notes')).toEqual({
			kind: 'internal',
			path: '/cocktails?gin=1#notes'
		});
	});

	it('treats a site-relative path as internal', () => {
		expect(classifyLink('/recipes/simple-syrup')).toEqual({
			kind: 'internal',
			path: '/recipes/simple-syrup'
		});
	});

	it('sends other sites out', () => {
		expect(classifyLink('https://en.wikipedia.org/wiki/Aviation')).toEqual({
			kind: 'external',
			href: 'https://en.wikipedia.org/wiki/Aviation'
		});
	});

	it.each([
		['javascript:alert(1)'],
		['JaVaScRiPt:alert(1)'],
		['data:text/html,<script>alert(1)</script>'],
		['vbscript:msgbox(1)'],
		['//evil.example/steal'],
		['']
	])('refuses %s', (href) => {
		expect(classifyLink(href)).toEqual({ kind: 'unsafe' });
	});
});
