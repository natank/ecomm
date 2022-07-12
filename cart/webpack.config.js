const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	devServer: {
		port: 8082,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'cart',
			filename: 'remoteEntry.js',
			exposes: {
				'./CartShow': './src/index',
			},
			shared: ['@faker-js/faker'],
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
