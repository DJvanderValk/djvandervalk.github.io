// @ts-check

import globals from 'globals';
import eslint from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			indent: ['error', 2],
		},
	},
	{
		files: ['**/*.{tsx}'],
		...reactPlugin.configs.flat.recommended,
		...reactHooksPlugin.configs.recommended
	},
	{
		files: ['**/*.{ts,tsx}'],
	},
	// {
	// 	files: ['**/*.{tsx}'],
	// 	extends: [
	// 		reactPlugin.configs.flat!.recommended
	// 	],
	// },
	prettierConfig,
);
