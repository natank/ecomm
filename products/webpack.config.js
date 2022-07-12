const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	devServer: {
		port: 8081,
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
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'products',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductsIndex': './src/index',
			},
			shared: ['@faker-js/faker'],
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
