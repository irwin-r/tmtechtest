require('@babel/register')({
	plugins: [
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator',
	],
	presets: [['@babel/preset-env']],
	ignore: ['node_modules', '.next'],
});

require('regenerator-runtime/runtime');

module.exports = require('./server.js');
