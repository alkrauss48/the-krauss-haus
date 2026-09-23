/**
 * The integration doc assumed plain text. The API sends markdown, so this tokenizer stands
 * between a language model's output and the DOM — and it carries more cases than everything
 * else in `$lib/bar` combined.
 */
import { describe, it, expect } from 'vitest';
import { parseMarkdown, plainText, type MdBlock, type MdInline } from './markdown';

/** Renders an AST to a compact string so assertions read like the markup they describe. */
function sketch(blocks: MdBlock[]): string {
	return blocks
		.map((block) => {
			if (block.kind === 'list') {
				const tag = block.ordered ? 'ol' : 'ul';
				return `<${tag}>${block.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${tag}>`;
			}
			if (block.kind === 'heading')
				return `<h${block.depth}>${inline(block.children)}</h${block.depth}>`;
			return `<p>${inline(block.children)}</p>`;
		})
		.join('');
}

function inline(nodes: MdInline[]): string {
	return nodes
		.map((node) => {
			switch (node.kind) {
				case 'text':
					return node.value;
				case 'strong':
					return `<b>${inline(node.children)}</b>`;
				case 'em':
					return `<i>${inline(node.children)}</i>`;
				case 'code':
					return `<c>${node.value}</c>`;
				case 'link':
					return `<a href="${node.href ?? ''}">${inline(node.children)}</a>`;
				case 'caret':
					return '|';
			}
		})
		.join('');
}

describe('parseMarkdown — blocks', () => {
	it('splits paragraphs on a blank line and keeps soft line breaks', () => {
		expect(sketch(parseMarkdown('one\ntwo\n\nthree'))).toBe('<p>one\ntwo</p><p>three</p>');
	});

	it('parses headings', () => {
		expect(sketch(parseMarkdown('### How the books built it'))).toBe(
			'<h3>How the books built it</h3>'
		);
	});

	it('parses bullet and ordered lists', () => {
		expect(sketch(parseMarkdown('- gin\n- lemon'))).toBe('<ul><li>gin</li><li>lemon</li></ul>');
		expect(sketch(parseMarkdown('1. Ensslin\n2. Boothby'))).toBe(
			'<ol><li>Ensslin</li><li>Boothby</li></ol>'
		);
	});
});

describe('parseMarkdown — inline', () => {
	it('parses bold, italic and code', () => {
		expect(sketch(parseMarkdown('a **b** _c_ `d`'))).toBe('<p>a <b>b</b> <i>c</i> <c>d</c></p>');
	});

	it('nests emphasis inside bold, as the API actually sends it', () => {
		expect(sketch(parseMarkdown('**Boothby, _Swallows_, 1930:** several'))).toBe(
			'<p><b>Boothby, <i>Swallows</i>, 1930:</b> several</p>'
		);
	});

	it('parses a markdown link', () => {
		expect(
			sketch(
				parseMarkdown(
					'[See the Gin Basil Smash](https://thekrausshaus.com/cocktails/gin-basil-smash)'
				)
			)
		).toBe(
			'<p><a href="https://thekrausshaus.com/cocktails/gin-basil-smash">See the Gin Basil Smash</a></p>'
		);
	});

	it('autolinks a bare URL', () => {
		expect(sketch(parseMarkdown('see https://example.com/x now'))).toBe(
			'<p>see <a href="https://example.com/x">https://example.com/x</a> now</p>'
		);
	});

	it('leaves an unterminated marker as literal text once the answer is complete', () => {
		expect(sketch(parseMarkdown('2 ** 3 and 4'))).toBe('<p>2 ** 3 and 4</p>');
	});

	it('honours a backslash escape', () => {
		expect(sketch(parseMarkdown('a \\*not italic\\* b'))).toBe('<p>a *not italic* b</p>');
	});

	it('never produces markup from raw HTML in the source', () => {
		// The AST has no node type that can carry markup, so this is structural rather than
		// a matter of escaping — but assert it, because it is the whole safety argument.
		const blocks = parseMarkdown('<script>alert(1)</script>');
		expect(blocks).toEqual([
			{ kind: 'paragraph', children: [{ kind: 'text', value: '<script>alert(1)</script>' }] }
		]);
	});
});

describe('parseMarkdown — streaming', () => {
	// Deltas arrive one to four characters at a time. If a partially-received marker ever
	// degrades to literal text, the guest watches asterisks appear and then snap away.
	it.each([
		['bold', 'There are **11** drinks'],
		['italic', 'out of _Swallows_ today'],
		['link', 'try [the Smash](https://thekrausshaus.com/cocktails/x) now'],
		['heading', '### How the books built it'],
		['bullets', '- gin\n- lemon juice'],
		['ordered', '1. Ensslin\n2. Boothby'],
		['code', 'run `npm test` here']
	])('never shows a raw marker while %s is still arriving', (_label, full) => {
		for (let i = 1; i <= full.length; i++) {
			const rendered = plainText(parseMarkdown(full.slice(0, i), { partial: true }));
			expect(rendered).not.toMatch(/\*|^#|`/m);
		}
	});

	it('opens a bold node the moment the second asterisk lands', () => {
		expect(sketch(parseMarkdown('There are **', { partial: true }))).toBe(
			'<p>There are <b></b></p>'
		);
		expect(sketch(parseMarkdown('There are **11', { partial: true }))).toBe(
			'<p>There are <b>11</b></p>'
		);
		expect(sketch(parseMarkdown('There are **11**', { partial: true }))).toBe(
			'<p>There are <b>11</b></p>'
		);
	});

	it('holds a half-written link inert rather than linking a truncated href', () => {
		const blocks = parseMarkdown('try [the Smash](https://thekraus', { partial: true });
		const link = (blocks[0] as { children: MdInline[] }).children.at(-1);
		expect(link).toMatchObject({ kind: 'link', href: null, partial: true });
	});

	it('does not autolink a bare URL that is still growing', () => {
		expect(sketch(parseMarkdown('see https://example.com/x', { partial: true }))).toBe(
			'<p>see https://example.com/x</p>'
		);
	});

	it('puts the caret inside an open bold run, where the next character lands', () => {
		expect(sketch(parseMarkdown('There are **1', { caret: true }))).toBe(
			'<p>There are <b>1|</b></p>'
		);
	});

	it('puts the caret inside the last list item', () => {
		expect(sketch(parseMarkdown('- gin\n- lem', { caret: true }))).toBe(
			'<ul><li>gin</li><li>lem|</li></ul>'
		);
	});

	it('emits a caret for an answer that has not started yet', () => {
		expect(sketch(parseMarkdown('', { caret: true }))).toBe('<p>|</p>');
	});
});

describe('plainText', () => {
	it('reads prose, not markup — this is what a screen reader announces', () => {
		expect(
			plainText(parseMarkdown("I'd pour the **Gin Basil Smash**.\n\n- _bright_\n- green"))
		).toBe("I'd pour the Gin Basil Smash.\n\nbright\ngreen");
	});
});
