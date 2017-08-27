var webpack = require('webpack');
var path = require('path');
var utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const srcPath = path.join(__dirname, '../src');
const plugins = utils.getMultiHtml('./src/view/**/*.html')
const entris = utils.getMultiEntry('./src/containers/**/*.js')

module.exports = {
  entry: entris, 
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...plugins,
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production") 
       }
    })
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
    historyApiFallback: true,
    hot: true,
    open: true,
    // noInfo: true,
    // progress: true,
    // openPage: '/rank.html',
    stats: {
      colors: true
    }
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