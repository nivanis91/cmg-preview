const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    index: './src/homepage.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080
  },

  module:{
    rules: [      
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env']
          }
      },
  ]
},
  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/homepage.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    })
  ]
};