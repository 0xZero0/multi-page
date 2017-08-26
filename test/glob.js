var glob = require('glob')

var entries = glob.sync('../src/*.js')

console.log(entries)