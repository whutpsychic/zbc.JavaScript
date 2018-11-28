
const path = require('path');

module.exports = {
	entry: ["@babel/polyfill",'./index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module:{
		rules:[
		{
			test:/\.js$/,
			exclude: __dirname + 'node_modules',
			// include:__dirname + 'src',		//	目前可有可无
			use:{
				loader:'babel-loader',
				options:{

					// plugins:["@babel/plugin-transform-arrow-functions"]
				}
			}
		}
		]
	}
};