'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const compiler = webpack(config);
new WebpackDevServer(compiler, config.devServer)
.listen(8081, 'localhost', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Listening at localhsot:8081')
  }
}
)