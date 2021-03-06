const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // need for typescript
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'exterior-ui-lib', // used for creating a lib
    libraryTarget: 'umd', // used for creating a lib
    umdNamedDefine: true, // used for creating a lib
  },
  externals: {
    // avoid bundling all of React into the same file
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader', // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
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
