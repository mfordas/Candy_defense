const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
  },
    devtool: "source-map",
    resolve: {
      extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.mp3$/i,
                loader: 'file-loader'
              }
            ]
    }
}