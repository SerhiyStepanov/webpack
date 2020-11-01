const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js'
  },
  
  module: {
     rules: [
       {
         test: /\.css$/i,
         use: [
           'style-loader',
           'css-loader',
         ],
       },
     ],
  },
  
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
}