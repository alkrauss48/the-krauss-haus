import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// required for svelte5 + jsdom as jsdom does not support matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	enumerable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	}))
});

// required for jsdom in this environment as it does not provide localStorage
const storage = new Map<string, string>();
Object.defineProperty(window, 'localStorage', {
	writable: true,
	enumerable: true,
	value: {
		getItem: (key: string) => storage.get(key) ?? null,
		setItem: (key: string, value: string) => storage.set(key, String(value)),
		removeItem: (key: string) => storage.delete(key),
		clear: () => storage.clear()
	}
});

// required for components using svelte transitions, as jsdom does not implement
// the Web Animations API
if (!Element.prototype.animate) {
	Element.prototype.animate = vi.fn().mockImplementation(() => ({
		cancel: vi.fn(),
		finish: vi.fn(),
		play: vi.fn(),
		pause: vi.fn(),
		reverse: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		onfinish: null,
		currentTime: 0,
		playState: 'finished',
		finished: Promise.resolve()
	}));
}

// add more mocks here if you need them
