var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: {
    'cam': './static/js/cam/cam.js',
  },

  output: {
      path: path.resolve('./static/js/bundles'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
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
