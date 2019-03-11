const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const dotenv = require('dotenv');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const DEFAULT_ENV = 'production';

// Helper for getting environment config by argument from CLI
// NOTE: 'mode' and 'env' are two different things
const getEnvConfig = (argv, mode) => {
  // Get all files from root that starts with '.env.'
  const envs = fs
    .readdirSync('./')
    .reduce((envs, item) => (/^\.env\..*/g).test(item)
      ? [...envs, item.replace('.env.', '')]
      : envs,
    []);

  // When you call `yarn build --hotfixes`
  // argv will contain "hotfixes: true"
  // find env that is "true" otherwise set DEFAULT_ENV
  const currentEnv = envs.find(env => argv[env]) || DEFAULT_ENV;

  if (!currentEnv) {
    console.warn(`Cannot find config for this env. Running as ${DEFAULT_ENV} env.`);
  }

  // eslint-disable-next-line no-console
  console.log(`${(mode === 'development') ? 'Running' : 'Building'} as ${currentEnv} env...`);

  // Load env config
  const { parsed } = dotenv.config({ path: `.env.${currentEnv}` });

  // Stringify all of the values
  const envKeys = Object.keys(parsed).reduce((keys, key) => ({
    ...keys,
    [`process.env.${key}`]: JSON.stringify(parsed[key]),
  }), {});

  return envKeys;
};

module.exports = (_, { mode, analyze, ...argv }) => ({
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: (mode === 'production') ? 'js/bundle.[hash:8].js' : 'js/bundle.js',
    chunkFilename: 'js/[name].[hash:8].bundle.js',
    publicPath: '/',
  },
  stats: {
    chunksSort: 'size',
    assetsSort: 'size',
    modules: false,
    entrypoints: false,
    hash: false,
    version: false,
  },
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
  resolve: {
    symlinks: false,
    alias: { src: path.resolve('./src') },
  },
  devtool: (mode === 'development') ? 'cheap-module-source-map' : false,
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    compress: true,
    watchContentBase: true,
    stats: 'minimal',
    historyApiFallback: { disableDotRule: true },
  },
  optimization: {
    splitChunks: { chunks: 'all' },
    nodeEnv: mode,
    minimize: (mode === 'production'),
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: { ecma: 8 },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: { safari10: true },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      // Eslint
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
        use: { loader: 'eslint-loader' },
      },
      // Images optimization
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ttf$/, /\.eot$/, /\.woff$/, /\.woff2$/],
        include: path.resolve(__dirname, 'src'),
        loader: 'url-loader',
        options: { limit: 10 * 1024, name: 'media/[name].[hash:8].[ext]' },
      },
      // Use SVG as React components
      // <SomeIcon />
      {
        test: /\.svg$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'react-svg-loader', options: { jsx: true } },
        ],
      },
      {
        test: /\.html$/,
        use: { loader: 'html-loader' },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(getEnvConfig(argv, mode)),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.png',
      template: './public/index.html',
      filename: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash].css',
      chunkFilename: 'css/chunk.[id].[contenthash].css',
    }),
    analyze && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
});
