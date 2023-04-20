const path = require('path');

const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');

const common = require('./webpack.common.js');

const dotenv = require('dotenv').config(
	{ path: path.join(__dirname, '.env') }
).parsed;

module.exports = (env) => {
	return merge(common(env), {
		mode: 'development',
		devtool: 'eval-cheap-module-source-map',
		devServer: {
			static: !env.pwa ? 'public' : { directory: path.resolve(__dirname, 'dist') },
			host: !env.network ? 'localhost' : '0.0.0.0',
			port: env.pwa && dotenv.PORT_LOCAL_PWA ? dotenv.PORT_LOCAL_PWA : dotenv.PORT ?? 'auto',
			hot: Boolean(!env.pwa),
			liveReload: false,
			historyApiFallback: true
		},
		plugins: [
			new Dotenv({
				allowEmptyValues: true
			}),
			new EnvironmentPlugin({
				MOCK_SERVICES: Boolean(env.mock)
			})
		]
	});
};