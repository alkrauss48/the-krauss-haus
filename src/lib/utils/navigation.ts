import { navigationStore } from '$lib/stores/navigation';

/**
 * Enhanced goto function that tracks navigation in the internal stack
 */
export function trackedGoto(path: string, replaceState = false): Promise<void> {
	return navigationStore.goto(path, replaceState);
}

/**
 * Go back using the internal navigation stack
 */
export function goBack(): Promise<void> {
	return navigationStore.goBack();
}

/**
 * Handle anchor tag clicks to track navigation
 */
export function handleAnchorClick(event: MouseEvent, href: string): void {
	// Only handle internal links
	if (href.startsWith('/')) {
		event.preventDefault();
		trackedGoto(href);
	}
}
