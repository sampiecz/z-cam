var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: {
    'cam': './cam/static/js/cam.js'
  },

  output: {
      path: path.resolve('./cam/static/bundles'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './cam/static/webpack-stats.json'}),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},	
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      },
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				use: [
					{loader: 'url-loader'}
				]
			},
			{
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      },
			{
					test: /\.svg$/,
					loader: 'svg-inline-loader'
			}
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

};
