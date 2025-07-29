import { writable, get } from 'svelte/store';
import { goto as svelteGoto } from '$app/navigation';
import { page } from '$app/stores';

interface NavigationState {
	stack: string[];
	currentPath: string;
}

const defaultState: NavigationState = {
	stack: [],
	currentPath: '/'
};

function createNavigationStore() {
	const { subscribe, update, set } = writable<NavigationState>(defaultState);

	return {
		subscribe,

		// Initialize the navigation store with the current page
		init() {
			update((state) => ({
				...state,
				currentPath: get(page).url.pathname,
				stack: []
			}));
		},

		// Navigate to a new path and track it in the stack
		goto(path: string, replaceState = false) {
			update((state) => {
				const newStack = replaceState ? state.stack : [...state.stack, state.currentPath];
				return {
					stack: newStack,
					currentPath: path
				};
			});

			return svelteGoto(path);
		},

		// Go back to the previous page in the internal stack
		goBack() {
			const state = get({ subscribe });

			if (state.stack.length > 0) {
				const previousPath = state.stack[state.stack.length - 1];
				update((currentState) => ({
					stack: currentState.stack.slice(0, -1),
					currentPath: previousPath
				}));
				return svelteGoto(previousPath);
			} else {
				// Default to home if no previous page
				update((currentState) => ({
					...currentState,
					currentPath: '/'
				}));
				return svelteGoto('/');
			}
		},

		// Check if there's a previous page in the stack
		canGoBack() {
			const state = get({ subscribe });
			return state.stack.length > 0;
		},

		// Manually add a path to the stack (useful for anchor navigation)
		trackNavigation(fromPath: string, toPath: string) {
			update((state) => ({
				stack: [...state.stack, fromPath],
				currentPath: toPath
			}));
		},

		// Reset the navigation stack
		reset() {
			set(defaultState);
		}
	};
}

export const navigationStore = createNavigationStore();
