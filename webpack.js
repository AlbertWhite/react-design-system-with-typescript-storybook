const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'exterior-ui-lib', // used for creating a lib
    libraryTarget: 'umd', // used for creating a lib
    umdNamedDefine: true, // used for creating a lib
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
