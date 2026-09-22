import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: { 'no-undef': 'off' }
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		},
		// Svelte reactivity ($: blocks, $effect) reads these assignments on
		// subsequent runs, which the rule's flow analysis cannot see.
		rules: { 'no-useless-assignment': 'off' }
	},
	{
		// This component renders links the bartenders wrote, so it handles both kinds: the
		// internal branch calls resolve(), and the external branch deliberately does not —
		// resolve() prefixes the app's base path and would corrupt an absolute off-site URL.
		// Hrefs are whitelisted by `classifyLink` before either branch sees them.
		files: ['src/lib/components/bar/MarkdownInline.svelte'],
		rules: { 'svelte/no-navigation-without-resolve': ['error', { ignoreLinks: true }] }
	}
);
