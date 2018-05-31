var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-sorce-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-0'],
              plugins: [
                'babel-plugin-syntax-jsx',
                'react-hot-loader/babel',
                'transform-decorators-legacy'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
