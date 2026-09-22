/**
 * The cocktail-page on-ramp makes a promise in its own label, and Sasha is the only bartender
 * who can keep it: Eddie cannot see this site's drinks at all.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';

vi.mock('$app/navigation', () => ({ goto: vi.fn() }));

import AskAboutButton from './AskAboutButton.svelte';
import { bar } from '$lib/bar/bar.svelte';

beforeEach(() => {
	bar.freshTab();
	bar.open = false;
});

describe('AskAboutButton', () => {
	it('always names Sasha, even while Eddie is behind the bar', () => {
		bar.switchTo('eddie');
		render(AskAboutButton, { title: 'Last Word' });
		expect(screen.getByRole('button', { name: 'Ask Sasha about Last Word' })).toBeInTheDocument();
	});

	it('hands the question to Sasha, not to whoever was pouring', async () => {
		bar.switchTo('eddie');
		render(AskAboutButton, { title: 'Last Word' });

		screen.getByRole('button').click();

		expect(bar.bartender).toBe('sasha');
		expect(bar.draft).toBe('Tell me about the Last Word.');
		expect(bar.open).toBe(true);
	});
});
