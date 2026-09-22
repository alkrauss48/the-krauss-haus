/**
 * The parser is the highest-value thing to test here: it is pure, and every bug in it looks
 * like "the bartender is broken" rather than like a parsing problem.
 */
import { describe, it, expect } from 'vitest';
import { parseFrame, parseSse, readBarStream, type BarEvent } from './stream';

function streamOf(chunks: string[]): ReadableStream<Uint8Array> {
	const encoder = new TextEncoder();
	return new ReadableStream({
		start(controller) {
			for (const chunk of chunks) controller.enqueue(encoder.encode(chunk));
			controller.close();
		}
	});
}

async function collect(chunks: string[]): Promise<BarEvent[]> {
	const events: BarEvent[] = [];
	for await (const event of readBarStream(streamOf(chunks))) events.push(event);
	return events;
}

const META = 'event: meta\ndata: {"conversation_id":"01a0c990"}\n\n';

describe('parseFrame', () => {
	it('parses each of the six event types', () => {
		expect(parseFrame('event: meta\ndata: {"conversation_id":"abc"}')).toEqual({
			type: 'meta',
			conversationId: 'abc'
		});
		expect(parseFrame('event: text\ndata: {"delta":"That one\'s "}')).toEqual({
			type: 'text',
			delta: "That one's "
		});
		expect(parseFrame('event: tool\ndata: {"label":"calling Eddie over"}')).toEqual({
			type: 'tool',
			label: 'calling Eddie over'
		});
		expect(
			parseFrame('event: consult\ndata: {"bartender":"Eddie","answer":"Savoy, 1930."}')
		).toEqual({ type: 'consult', bartender: 'Eddie', answer: 'Savoy, 1930.' });
		expect(parseFrame('event: error\ndata: {"message":"Eddie could not answer."}')).toEqual({
			type: 'error',
			message: 'Eddie could not answer.'
		});
		expect(parseFrame('event: done\ndata: {}')).toEqual({ type: 'done' });
	});

	it('ignores an event type it was never told to expect', () => {
		expect(parseFrame('event: sommelier\ndata: {}')).toBeNull();
	});

	it('ignores keep-alive comments rather than emitting a blank frame', () => {
		expect(parseFrame(': ping')).toBeNull();
	});

	it('survives malformed JSON without throwing', () => {
		expect(parseFrame('event: text\ndata: {not json')).toBeNull();
	});
});

describe('readBarStream', () => {
	it('reassembles a frame split across a chunk boundary mid-frame', async () => {
		expect(await collect(['event: te', 'xt\ndata: {"delta":"hi"}\n\n'])).toEqual([
			{ type: 'text', delta: 'hi' }
		]);
	});

	it('reassembles a frame split mid-JSON', async () => {
		expect(await collect(['event: text\ndata: {"del', 'ta":"hi"}\n\n'])).toEqual([
			{ type: 'text', delta: 'hi' }
		]);
	});

	it('survives a multi-byte character split across chunks', async () => {
		const encoder = new TextEncoder();
		const whole = encoder.encode('event: text\ndata: {"delta":"Curaçao"}\n\n');
		const cut = whole.indexOf(0xc3); // the ç lead byte
		const events: BarEvent[] = [];
		const stream = new ReadableStream<Uint8Array>({
			start(controller) {
				controller.enqueue(whole.slice(0, cut + 1));
				controller.enqueue(whole.slice(cut + 1));
				controller.close();
			}
		});
		for await (const event of readBarStream(stream)) events.push(event);
		expect(events).toEqual([{ type: 'text', delta: 'Curaçao' }]);
	});

	it('keeps a newline inside a delta', async () => {
		expect(await collect(['event: text\ndata: {"delta":"a\\n\\nb"}\n\n'])).toEqual([
			{ type: 'text', delta: 'a\n\nb' }
		]);
	});

	it('handles CRLF frame separators', async () => {
		const events = await collect([
			'event: meta\r\ndata: {"conversation_id":"abc"}\r\n\r\n',
			'event: done\r\ndata: {}\r\n\r\n'
		]);
		expect(events).toEqual([{ type: 'meta', conversationId: 'abc' }, { type: 'done' }]);
	});

	it('still yields the last frame when the stream closes without a trailing blank line', async () => {
		// `done` is always last, so dropping an unterminated tail frame would mark every
		// successful answer as failed.
		const events = await collect([META, 'event: done\ndata: {}']);
		expect(events.at(-1)).toEqual({ type: 'done' });
	});
});

describe('parseSse', () => {
	it('parses a whole document in order', () => {
		expect(
			parseSse(META + 'event: text\ndata: {"delta":"hi"}\n\nevent: done\ndata: {}\n\n')
		).toEqual([
			{ type: 'meta', conversationId: '01a0c990' },
			{ type: 'text', delta: 'hi' },
			{ type: 'done' }
		]);
	});
});
