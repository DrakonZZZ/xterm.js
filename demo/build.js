/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

// @ts-check

const path = require('path');
const webpack = require('webpack');

/**
 * This webpack config builds and watches the demo project. It works by taking the output from tsc
 * (via `yarn watch`) which is put into `out/` and then webpacks it into `demo/dist/`. The aliases
 * are used fix up the absolute paths output by tsc (because of `baseUrl` and `paths` in
 * `tsconfig.json`.
 *
 * For production builds see `webpack.config.js` in the root directory. If that is built the demo
 * can use that by switching out which `Terminal` is imported in `client.ts`, this is useful for
 * validating that the packaged version works correctly.
 *
 * @type {import('webpack').Configuration}
 */
const clientConfig = {
  entry: path.resolve(__dirname, 'client.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '..'),
      path.resolve(__dirname, '../addons')
    ],
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      common: path.resolve('./out/common'),
      browser: path.resolve('./out/browser')
    },
    fallback: {
      // The ligature modules contains fallbacks for node environments, we never want to browserify them
      stream: false,
      util: false,
      os: false,
      path: false,
      fs: false
    }
  },
  output: {
    filename: 'client-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  watch: true
};
const compiler = webpack(clientConfig);

compiler.compile(() => (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log(stats?.toString({
    colors: true
  }));
});
