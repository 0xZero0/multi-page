var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const srcPath = path.join(__dirname, '/src');
console.log('__dirname',__dirname)
console.log('srcPath',srcPath)
var entries = glob.sync('./src/containers/**/*.js'),
    entriHtml = glob.sync('./src/view/**/*.html');
function getFileName(data) {
  const arry = data.split('/');
  if (arry.length > 4) {
    return arry[3]
  }
  const _name = arry[arry.length -1].replace(/\.(js|jsx|html)/, '');
  return _name;
}
var entryJsList = {}
var entryHtmlList = {}
var plugins = []
for (var _jsPath of entries) {
  var chunkJsName = getFileName(_jsPath)
  entryJsList[chunkJsName] = _jsPath
}
for (var _htmlPath of entriHtml) {
  var chunkName = getFileName(_htmlPath)
  entryHtmlList[chunkName] =  _htmlPath
  plugins.push(new HtmlWebpackPlugin({
    filename: './' + chunkName + '.html',
    chunks: [chunkName],
    template: _htmlPath
  }))
}

module.exports = {
  entry: entryJsList, 
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    ...plugins,
    // new webpack.optimize.UglifyJsPlugin({
      
    // }),
    // new webpack.DefinePlugin({
    //   "process.env": { 
    //      NODE_ENV: JSON.stringify("production") 
    //    }
    // })
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: './dist',
    hot: true
  },
  resolve: {
    alias: {
      components: `${srcPath}/components/`, // 公共组件库
      containers: `${srcPath}/containers/`, // containers 视图渲染
      lib: `${srcPath}/lib/`, // 公共js库
      styles: `${srcPath}/styles/`, // 样式库
      images: `${srcPath}/images/`, // 静态资源库
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}