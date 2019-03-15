module.exports = {
  mode: 'production',
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/docs`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: `${__dirname}/docs`,
    port: 3000,
    hot: true,
    open: true
  }
};
