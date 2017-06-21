const express = require('express'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config.js'),
  app = express(),
  compiler = webpack(webpackConfig),
  router = require('./routes/index')

app.use(express.static(__dirname + '/www'))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}))

app.use('/api', router)

const server = app.listen(3000, function() {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
