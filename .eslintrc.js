const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'airbnb',
		'prettier',
		'prettier/react',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
	rules: {
		'prettier/prettier': ['error', prettierOptions],
	},
};
