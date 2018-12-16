const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: ["@babel/polyfill", "./index.js"],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		// hot:true,			//默认值为 true，所以可以不用设置
		port: 9000,

	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: __dirname + "node_modules",
				// include:__dirname + 'src',		//	目前可有可无
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
