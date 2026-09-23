/**
 * Three rules govern the panel, and each of them is a test here: it is always obvious who is
 * behind the bar, it is never unclear whether something is happening, and the two of them
 * cannot be swapped mid-answer.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/svelte';

vi.mock('$app/navigation', () => ({ goto: vi.fn() }));

import BarPanel from './BarPanel.svelte';
import { bar } from '$lib/bar/bar.svelte';
import { bartenders } from '$lib/bar/bartenders';

beforeEach(() => {
	bar.freshTab();
	bar.activity = { kind: 'idle' };
	bar.waiting = 0;
	bar.open = true;
});

describe('BarPanel', () => {
	it('opens on Sasha, every time', () => {
		render(BarPanel);
		const sasha = screen.getByRole('radio', { name: /sasha/i });
		expect(sasha).toHaveAttribute('aria-checked', 'true');
		expect(screen.getByRole('radio', { name: /eddie/i })).toHaveAttribute('aria-checked', 'false');
	});

	it('is a dialog a screen reader can find and label', () => {
		render(BarPanel);
		expect(screen.getByRole('dialog', { name: 'Ask the bartender' })).toHaveAttribute(
			'aria-modal',
			'true'
		);
	});

	it('names the current bartender in more than one place at once', () => {
		render(BarPanel);
		// The nameplate, the empty-state line, and the composer placeholder all answer
		// "who am I talking to" without the guest having to look for it.
		expect(screen.getByRole('radio', { name: /sasha/i })).toBeInTheDocument();
		expect(screen.getByText(/Sasha is behind the bar/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Ask Sasha…')).toBeInTheDocument();
	});

	it('introduces both bartenders before the first question', () => {
		render(BarPanel);
		// A guest who does not know the difference picks wrong and blames the answer, so the
		// empty state says what each one is for — including the one thing Eddie cannot do —
		// without anyone having to open anything.
		expect(screen.getByText(bartenders.sasha.bestAt)).toBeInTheDocument();
		expect(screen.getByText(bartenders.eddie.bestAt)).toBeInTheDocument();
		expect(screen.getByText(bartenders.eddie.caveat!)).toBeInTheDocument();
		expect(screen.getByText(/call the other over/i)).toBeInTheDocument();
	});

	it('keeps the longer introductions behind a link', async () => {
		render(BarPanel);

		// Folded, so the empty state stays prose and one link rather than two more things that
		// look pressable.
		expect(screen.queryByText(bartenders.sasha.about)).not.toBeInTheDocument();
		const opener = screen.getByRole('button', { name: /learn more about the bartenders/i });
		expect(opener).toHaveAttribute('aria-expanded', 'false');

		opener.click();
		expect(await screen.findByText(bartenders.sasha.about)).toBeInTheDocument();
		expect(screen.getByText(bartenders.eddie.about)).toBeInTheDocument();
		expect(screen.getByText(new RegExp(bartenders.eddie.groundedIn))).toBeInTheDocument();
	});

	it('says nothing is stored, where a guest sees it before typing', () => {
		render(BarPanel);
		expect(screen.getByText(/Nothing you ask here is stored/i)).toBeInTheDocument();
	});

	it('follows the bartender when the guest switches', async () => {
		render(BarPanel);
		bar.switchTo('eddie');
		expect(await screen.findByPlaceholderText('Ask Eddie…')).toBeInTheDocument();
		expect(screen.getByRole('radio', { name: /eddie/i })).toHaveAttribute('aria-checked', 'true');
	});

	it('says what is happening inside the answer bubble, never as a bare caret', async () => {
		render(BarPanel);
		// The pending bartender turn `send()` pushes before the first byte arrives.
		bar.items = [
			{ id: 'q', role: 'guest', bartender: 'sasha', parts: [{ kind: 'text', text: 'hi' }], at: 0 },
			{ id: 'a', role: 'bartender', bartender: 'sasha', parts: [], question: 'hi', at: 0 }
		];

		for (const activity of [
			{ kind: 'thinking' } as const,
			{ kind: 'tool', label: 'running an eye down the menus' } as const,
			{ kind: 'consulting', label: 'calling Eddie over', other: 'eddie' } as const
		]) {
			bar.activity = activity;

			// Said under Sasha's name, where the answer will land — not in a footer, and never
			// as a bare caret.
			const bubble = (await screen.findByText('SASHA', { selector: 'p' })).parentElement!;
			const status = await within(bubble).findByText(/\S/, {
				selector: '[aria-live="polite"] span'
			});
			expect(status.textContent?.trim()).not.toBe('');
			expect(within(bubble).queryByText('|')).not.toBeInTheDocument();
		}
	});

	it('blocks switching bartenders mid-answer', async () => {
		render(BarPanel);
		bar.activity = { kind: 'answering' };

		const eddie = await screen.findByRole('radio', { name: /eddie/i });
		expect(eddie).toBeDisabled();
		expect(eddie).toHaveAttribute('title', 'one at a time');

		bar.switchTo('eddie');
		expect(bar.bartender).toBe('sasha');
	});

	it('offers a stop button while an answer is streaming', async () => {
		render(BarPanel);
		bar.activity = { kind: 'answering' };
		expect(await screen.findByLabelText('Stop')).toBeInTheDocument();
	});
});
