const patch = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// TODO: minificar el codigo para produccion

const DEFAULT_PUBLIC_PATH = 'static';

module.exports = {
  entry: patch.resolve(__dirname, 'src/main.js'),
  output: {
    path: patch.resolve(__dirname, 'dist'),
    filename: `${DEFAULT_PUBLIC_PATH}/js/[contenthash].js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
              // presets: ['@babel/preset-env'] // TODO: probar esto, para eliminar .babelrc
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'vue-style-loader', // TODO: agregar ENV para definir este loader
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: `${DEFAULT_PUBLIC_PATH}/img`,
          name: '[contenthash].[ext]',
          publicPath: `${DEFAULT_PUBLIC_PATH}/img`
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: patch.resolve(__dirname, 'src/index.html'),
      cache: true
    }),
    new MiniCssExtractPlugin({
      filename: `${DEFAULT_PUBLIC_PATH}/css/[contenthash].css`,
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ]
};
