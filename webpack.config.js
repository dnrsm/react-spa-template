const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require("autoprefixer");
const precss = require("precss");
const publidDir = path.join(__dirname, '/public');

module.exports = [
  {
    entry: [
      './src/index.jsx',
    ],
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      }],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir,
    },
  },
  {
    entry: {
      style: './stylesheets/index.scss',
    },
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.css',
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: 'url-loader',
      },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
      // new webpack.LoaderOptionsPlugin({
      //   options: {
      //     postcss: [
      //       autoprefixer({
      //         browsers: ['last 2 versions'],
      //       }),
      //       precss,
      //     ],
      //   },
      // }),
    ],
  },
];
