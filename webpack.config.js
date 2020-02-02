const path = require("path");


module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve('./Dist/js'),
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
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                  presets: ['@babel/preset-env']
                },
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: './Dist/img',
                  },
              },
              {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                  minimize: true,
                  // outputPath: './Dist/html',
                },
              }
            ]
    }
}