/**
 * The bartenders author their own links now — the API hands us markdown like
 * `[See the Gin Basil Smash](https://thekrausshaus.com/cocktails/gin-basil-smash)`, so the
 * href is model-written text heading straight for an `href` attribute.
 *
 * Not using `@html` is no longer enough on its own: `[click](javascript:…)` renders as a
 * working anchor. Every href is classified here against a scheme whitelist, and anything
 * that is not plainly a page gets rendered as inert text instead of a link.
 */

const SITE_HOSTS = new Set(['thekrausshaus.com', 'www.thekrausshaus.com']);
const SAFE_SCHEMES = new Set(['http:', 'https:', 'mailto:']);

export type LinkTarget =
	/** A page on this site — hand to `goto(resolve(toPathname(path)))`. */
	| { kind: 'internal'; path: string }
	/** Somewhere else — needs target="_blank" rel="noopener noreferrer". */
	| { kind: 'external'; href: string }
	/** Not a link we are willing to render. Show the label as plain text. */
	| { kind: 'unsafe' };

export function classifyLink(href: string): LinkTarget {
	const raw = href.trim();
	if (raw === '') return { kind: 'unsafe' };

	// Protocol-relative (`//evil.example`) inherits whatever scheme the page has and reads
	// like a path. Refuse it rather than guess.
	if (raw.startsWith('//')) return { kind: 'unsafe' };

	// A site-relative path is the one form with no scheme to check.
	if (raw.startsWith('/')) return { kind: 'internal', path: raw };

	let url: URL;
	try {
		// The base only matters for inputs that are already relative; absolute hrefs ignore it.
		url = new URL(raw, 'https://thekrausshaus.com');
	} catch {
		return { kind: 'unsafe' };
	}

	if (!SAFE_SCHEMES.has(url.protocol)) return { kind: 'unsafe' };

	// Deliberately matched against the real hostname rather than the current origin, so a link
	// behaves identically on localhost:3000 and in production.
	if (url.protocol !== 'mailto:' && SITE_HOSTS.has(url.hostname)) {
		return { kind: 'internal', path: `${url.pathname}${url.search}${url.hash}` };
	}

	return { kind: 'external', href: url.href };
}
