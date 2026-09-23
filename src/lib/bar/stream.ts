/**
 * Server-Sent Events over `fetch`. `EventSource` is not an option: it is GET-only and cannot
 * set the headers this API needs.
 *
 * Six event types, and that is the whole protocol. `meta` is always first and `done` is
 * always last, including when an answer fails — so a closed socket with no `done` is an
 * abnormal termination, never a normal ending.
 */

export type BarEvent =
	| { type: 'meta'; conversationId: string }
	| { type: 'text'; delta: string }
	| { type: 'tool'; label: string }
	| { type: 'consult'; bartender: string; answer: string }
	| { type: 'error'; message: string }
	| { type: 'done' };

/** Frames are separated by a blank line, which may arrive CRLF from PHP or an ingress. */
const SEPARATOR = /\r?\n\r?\n/;

/** Yields one BarEvent per SSE frame, in order, as they arrive. */
export async function* readBarStream(body: ReadableStream<Uint8Array>): AsyncGenerator<BarEvent> {
	const reader = body.getReader();
	// Decoding by hand rather than with TextDecoderStream: that class is missing from jsdom,
	// and `pipeThrough` complicates cancelling the reader when the guest hits stop.
	const decoder = new TextDecoder();
	let buffer = '';

	try {
		for (;;) {
			const { value, done } = await reader.read();
			if (done) break;

			buffer += decoder.decode(value, { stream: true });

			let split: RegExpExecArray | null;
			while ((split = SEPARATOR.exec(buffer)) !== null) {
				const frame = buffer.slice(0, split.index);
				buffer = buffer.slice(split.index + split[0].length);

				const parsed = parseFrame(frame);
				if (parsed) yield parsed;
			}
		}

		// The server is not obliged to end with a blank line, so whatever is left in the buffer
		// is a real frame. Dropping it loses the `done` that every answer ends on, which would
		// quietly mark every successful answer as failed.
		buffer += decoder.decode();
		const tail = parseFrame(buffer);
		if (tail) yield tail;
	} finally {
		await reader.cancel().catch(() => {
			/* already closed */
		});
	}
}

/** Parses one already-split frame. Exported for tests. */
export function parseFrame(frame: string): BarEvent | null {
	let event = '';
	const data: string[] = [];

	for (const line of frame.split(/\r?\n/)) {
		// `: keep-alive` comments carry no event and must not produce a frame.
		if (line.startsWith(':')) continue;
		if (line.startsWith('event:')) event = line.slice(6).trim();
		else if (line.startsWith('data:')) data.push(line.slice(5).trimStart());
	}

	if (event === '') return null;

	let payload: Record<string, unknown>;
	try {
		payload = data.length > 0 ? JSON.parse(data.join('\n')) : {};
	} catch {
		return null;
	}

	switch (event) {
		case 'meta':
			return { type: 'meta', conversationId: String(payload.conversation_id ?? '') };
		case 'text':
			return { type: 'text', delta: String(payload.delta ?? '') };
		case 'tool':
			return { type: 'tool', label: String(payload.label ?? '') };
		case 'consult':
			return {
				type: 'consult',
				bartender: String(payload.bartender ?? ''),
				answer: String(payload.answer ?? '')
			};
		case 'error':
			return { type: 'error', message: String(payload.message ?? '') };
		case 'done':
			return { type: 'done' };
		default:
			return null; // a frame type we were never told to expect
	}
}

/** Parses a complete SSE document at once. Exported so tests need no streams. */
export function parseSse(text: string): BarEvent[] {
	const events: BarEvent[] = [];
	for (const frame of text.split(SEPARATOR)) {
		const parsed = parseFrame(frame);
		if (parsed) events.push(parsed);
	}
	return events;
}
