var webpack = require('webpack');

function getEntries() {
  var entry = [
    "./js/index.js"
  ];
  if(process.env.NODE_ENV != 'production'){
    entry.push('webpack/hot/only-dev-server')
  }
  return entry;
}

module.exports = {
  entry: getEntries(),
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      loaders: [
          { test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
          // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
          }
      ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
