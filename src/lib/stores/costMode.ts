import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'tkh-show-costs';

export const toastMessage = writable<string | null>(null);

let toastTimer: ReturnType<typeof setTimeout>;

function createCostMode() {
	const initialValue = browser ? localStorage.getItem(STORAGE_KEY) === 'true' : false;
	const { subscribe, update } = writable(initialValue);

	return {
		subscribe,
		toggleCostMode: () => {
			update((current) => {
				const next = !current;
				if (browser) {
					localStorage.setItem(STORAGE_KEY, String(next));
				}
				toastMessage.set(next ? 'Costs visible' : 'Costs hidden');
				clearTimeout(toastTimer);
				toastTimer = setTimeout(() => toastMessage.set(null), 1500);
				return next;
			});
		}
	};
}

export const costMode = createCostMode();
export const toggleCostMode = costMode.toggleCostMode;
