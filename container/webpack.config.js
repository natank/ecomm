const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	devServer: {
		port: 8080,
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
			name: 'container',
			remotes: {
				products: 'products@http://localhost:8081/remoteEntry.js',
				cart: 'cart@http://localhost:8082/remoteEntry.js',
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
