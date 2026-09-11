/**
 * `resolve()` from `$app/paths` is generic over a single member of the app's literal
 * route list, so it rejects paths that are only known at runtime — breadcrumb trails
 * built from the current URL, or paths carrying a query string.
 *
 * Widen those before handing them to `resolve()`, which just prefixes the base path.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toPathname(path: string): any {
	return path;
}
