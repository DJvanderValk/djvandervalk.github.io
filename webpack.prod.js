const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const { InjectManifest } = require('workbox-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = (env) => merge(common(env), {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.resolve(__dirname, 'public', 'locales'), to: 'locales' },
				// path.resolve(__dirname, 'public', 'favicon.ico'),
				path.resolve(__dirname, 'public', 'robots.txt')
			]
		}),
		new Dotenv({
			systemvars: Boolean(env.goal !== 'local'),
			allowEmptyValues: true,
			safe: true
		})
	]
});