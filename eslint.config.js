import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.Config[]} */
export default [
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		env:{
			"jest/globals": true
		},
		files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			react: pluginReact,
			'react-hooks': pluginReact,
			prettier: prettierPlugin,
			'unused-imports': unusedImports,
			
		},
		rules: {
			// ...prettierPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/prefer-stateless-function': 'off',
			'react/jsx-filename-extension': 'off',
			'react/jsx-one-expression-per-line': 'off',
			'no-nested-ternary': 'off',
			// Disable the default no-unused-vars rule
			'no-unused-vars': 'off',
			// Enable the plugin's rule for unused variables and imports
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_', // Ignore variables prefixed with _
					args: 'after-used',
					argsIgnorePattern: '^_', // Ignore arguments prefixed with _
				},
			],
		},
	},
];
