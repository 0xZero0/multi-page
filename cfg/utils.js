var glob = require('glob');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getFileName(data) {
  const arry = data.split('/');
  if (arry.length > 4) {
    return arry[3]
  }
  const _name = arry[arry.length - 1].replace(/\.(js|jsx|html)/, '');
  return _name;
}

exports.getMultiEntry = function (globPath) {
  var entryJsList = {}
  glob.sync(globPath).forEach(function (entry) {
    const chunkJsName = getFileName(entry)
    entryJsList[chunkJsName] =  path.join(__dirname,'/../', entry)
  }) 
  return entryJsList
}

exports.getMultiHtml = function (globPath) {
  var entryHtmlList = {}, plugins = []
  glob.sync(globPath).forEach(function (_htmlPath) {
    var chunkName = getFileName(_htmlPath)
    entryHtmlList[chunkName] = _htmlPath
    plugins.push(new HtmlWebpackPlugin({
      filename: './' + chunkName + '.html',
      chunks: [chunkName],
      template:  path.join(__dirname,'/../', _htmlPath) 
    }))
  })
  return plugins
}
