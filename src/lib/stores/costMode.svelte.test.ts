/**
 * Cost mode is a hidden toggle whose state has to survive a reload, so the
 * localStorage round-trip is the part worth pinning down.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { get } from 'svelte/store';

const STORAGE_KEY = 'tkh-show-costs';

async function freshStore() {
	vi.resetModules();
	return import('./costMode');
}

beforeEach(() => {
	localStorage.clear();
	vi.useFakeTimers();
});

afterEach(() => {
	vi.useRealTimers();
});

describe('costMode', () => {
	it('starts hidden when nothing is stored', async () => {
		const { costMode } = await freshStore();
		expect(get(costMode)).toBe(false);
	});

	it('restores a previously enabled cost mode', async () => {
		localStorage.setItem(STORAGE_KEY, 'true');
		const { costMode } = await freshStore();
		expect(get(costMode)).toBe(true);
	});

	it('stays hidden for any stored value other than "true"', async () => {
		for (const stored of ['false', '1', 'TRUE', '']) {
			localStorage.setItem(STORAGE_KEY, stored);
			const { costMode } = await freshStore();
			expect(get(costMode), `stored value ${JSON.stringify(stored)}`).toBe(false);
		}
	});

	it('toggles the value and persists it', async () => {
		const { costMode, toggleCostMode } = await freshStore();

		toggleCostMode();
		expect(get(costMode)).toBe(true);
		expect(localStorage.getItem(STORAGE_KEY)).toBe('true');

		toggleCostMode();
		expect(get(costMode)).toBe(false);
		expect(localStorage.getItem(STORAGE_KEY)).toBe('false');
	});

	it('announces the new state via the toast', async () => {
		const { toggleCostMode, toastMessage } = await freshStore();

		toggleCostMode();
		expect(get(toastMessage)).toBe('Costs visible');

		toggleCostMode();
		expect(get(toastMessage)).toBe('Costs hidden');
	});

	it('clears the toast after 1.5 seconds', async () => {
		const { toggleCostMode, toastMessage } = await freshStore();

		toggleCostMode();
		expect(get(toastMessage)).not.toBeNull();

		vi.advanceTimersByTime(1500);
		expect(get(toastMessage)).toBeNull();
	});

	it('does not let an earlier toast timer clear a newer toast', async () => {
		const { toggleCostMode, toastMessage } = await freshStore();

		toggleCostMode();
		vi.advanceTimersByTime(1400);
		toggleCostMode(); // second toast, 100ms before the first would expire

		vi.advanceTimersByTime(200);
		expect(get(toastMessage), 'the first timer cleared the second toast').toBe('Costs hidden');

		vi.advanceTimersByTime(1400);
		expect(get(toastMessage)).toBeNull();
	});
});
