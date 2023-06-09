const path = require('path');

const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

const version = require('./package.json').version;

module.exports = (env) => ({
	entry: [
		path.join(__dirname, 'src', 'index.tsx')
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.ts|tsx?$/,
				loader: 'ts-loader',
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'node_modules', 'leaflet', 'dist')
				],
			},
			{
				test: /\.svg$/,
				type: 'asset/inline',
				include: [
					path.resolve(__dirname, 'public'),
					path.resolve(__dirname, 'src', 'assets')
				]
			},
			{
				test: /\.(png|jp?g|gif|ico)$/,
				type: 'asset/resource',
				include: [
					path.resolve(__dirname, 'public'),
					path.resolve(__dirname, 'src', 'assets')
				]
			},
			{
				test: /\.md$/,
				type: 'asset/source',
				include: path.resolve(__dirname, 'docs'),
			},
			{
				test: /\.ya?ml$/,
				use: 'yaml-loader'
			}
		]
	},
	plugins: [
		new CaseSensitivePathsWebpackPlugin(),
		new EnvironmentPlugin({
			VERSION: version
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
			templateParameters: {
				node_env_goal: env.goal
			}
		})
	],
	resolve: {
		alias: {
			'~atoms': path.resolve(__dirname, 'src', 'atoms'),
			'~assets': path.resolve(__dirname, 'src', 'assets'),
			'~components': path.resolve(__dirname, 'src', 'components'),
			'~constants': path.resolve(__dirname, 'src', 'constants'),
			'~docs': path.resolve(__dirname, 'docs'),
			'~enums': path.resolve(__dirname, 'src', 'enums'),
			'~features': path.resolve(__dirname, 'src', 'features'),
			'~pages': path.resolve(__dirname, 'src', 'pages'),
			'~themes': path.resolve(__dirname, 'src', 'themes'),
		},
		extensions: ['.tsx', '.ts', '.js'],
		fallback: {
			path: require.resolve('path-browserify')
		}
	},
	target: 'browserslist'
});