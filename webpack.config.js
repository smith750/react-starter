var webpack = require('webpack');
module.exports = {
  entry: {
    app: "./src/index.jsx"
  },
  output: {
    path: __dirname + '/build',
    filename: "[name].bundle.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', 'lib'],
    extensions: ['', '.js', '.css']
  },
  module: {
    preLoaders: [
      {test: /\.json$/, loader: 'json'}
    ],
    loaders: [
      { test: /\.jsx$/, loaders: ['babel','babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

}