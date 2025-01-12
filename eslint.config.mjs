// @ts-check

import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintPluginImport from 'eslint-plugin-import';

export default tseslint.config(
	{
		ignores: ['**/build/**', '**/dist/**', '**/scripts/**'],
	},
	eslint.configs.recommended,
	// Recommended is included in strict
	...tseslint.configs.strict,
	...tseslint.configs.stylistic,
	{
		files: ['**/*.{tsx}'],
		...reactPlugin.configs.flat?.recommended,
		...reactHooksPlugin.configs.flat?.recommended,
	},
	{
		files: ['**/*.{tsx}'],
		plugins: {
			react: reactPlugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			sourceType: 'module',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
		},
	},
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			import: fixupPluginRules(eslintPluginImport),
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
			},
			sourceType: 'module',
		},
		rules: {
			indent: [
				'error',
				'tab',
				{
					SwitchCase: 1,
					flatTernaryExpressions: true,
					// This otherwise clashes with the prettier auto formatter
					ignoredNodes: ['ConditionalExpression'],
				},
			],

			'@typescript-eslint/prefer-literal-enum-member': [
				'error',
				{ allowBitwiseExpressions: true },
			],

			'no-multi-spaces': ['warn'],
			'@typescript-eslint/no-explicit-any': 'warn',

			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],

			'no-restricted-imports': [
				'error',
				{
					patterns: ['~features/*/*'],
				},
			],

			semi: 'error',
			curly: 2,

			quotes: [
				'warn',
				'single',
				{
					avoidEscape: true,
					allowTemplateLiterals: true,
				},
			],

			'import/order': [
				'warn',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling'],
						'index',
					],

					pathGroups: [
						{
							pattern: '@(react|react-native)',
							group: 'builtin',
							position: 'before',
						},
						{
							pattern: '__root/*',
							group: 'internal',
						},
						{
							pattern: '~*',
							group: 'internal',
						},
						{
							pattern: '~*/**',
							group: 'internal',
						},
						{
							pattern: '{.,..}/**/*.{scss,css}',
							group: 'unknown',
							position: 'after',
						},
					],

					pathGroupsExcludedImportTypes: ['react'],
					'newlines-between': 'always',

					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	},
	prettierConfig,
);
