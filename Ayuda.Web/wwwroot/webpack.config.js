
const serverUrls = {
  LOCAL: 'http://localhost:57476/',
}

console.log('Server', process.env.NODE_ENV)
const metadata = {
  serverType: process.env.SERVER_TYPE,
  apiUrl: serverUrls['LOCAL']
};
console.log('apiUrl', metadata.apiUrl)

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'wwwroot/js/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  plugins: [
    new DefinePlugin({
      'API_URL': JSON.stringify(metadata.apiUrl),
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
