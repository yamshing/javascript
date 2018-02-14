const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	target:'electron',
  entry: './src/coffee/app.coffee',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.esm.js'
		}
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/pug/index.pug'
		})
	],
	module:{
		rules:[
			{
				test: /\.pug$/,
				use: ['raw-loader','pug-html-loader']
			},
			{
				test: /\.coffee$/,
				use: ['coffee-loader']
			},
			{
				test: /\.vue$/,
				use: ['vue-loader','pug-html-loader']
			}
		]
	}
};
