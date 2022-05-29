const path = require('path') // The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // Tells webpack to use it's built in optimisations accordingly.
  entry: {
    index: ['react-app-polyfill/stable', './src/index.js'], //Tells webpack which files to compile, can accept multiple.
  },
  output: {
    publicPath: '/',
    filename: '[name][contenthash].bundle.js', // A custom name for compiled code.
    path: path.resolve(__dirname, 'dist'), // The location you would like your bundled code to be placed in.
    clean: true, // Prevents creation of mulitple files in dist. Replaces original.
    assetModuleFilename: '[name][ext]', // Prevents renaming of assets.
  },
  stats: {
    errorDetails: true,
  },

  devtool: 'source-map', // Adds a map file to /dist which maps the dist files to the src files. Aids debugging.

  devServer: {
    // Specifies what to serve
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3001,
    open: true, // When we npm run dev, it will open browser automatically
    hot: true, // hot reloading
    compress: true, // Enable gzip compression
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/, // Any files that end with this extension, apply following loaders.
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Will rebuild the dist folder
      title: 'Streams V6',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
}
