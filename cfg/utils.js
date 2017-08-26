var glob = require('glob');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var entries = glob.sync('../src/containers/**/*.js'),
//   entriHtml = glob.sync('../src/view/**/*.html');
// console.log('entries', entries)
// console.log('entriHtml', entriHtml)
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

// for (var _jsPath of entries) {
//   var chunkJsName = getFileName(_jsPath)
//   entryJsList[chunkJsName] = _jsPath
// }
// for (var _htmlPath of entriHtml) {
//   var chunkName = getFileName(_htmlPath)
//   entryHtmlList[chunkName] = _htmlPath
//   plugins.push(new HtmlWebpackPlugin({
//     filename: './' + chunkName + '.html',
//     chunks: [chunkName],
//     template: _htmlPath
//   }))
// }