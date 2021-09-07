const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
exports.ls = {
  run: function () {
    const files = fs.readdirSync(process.cwd())
    console.log(files.join('  '))
  }
}

exports.ll = {
  run: function () {
    const currentPath = process.cwd()
    const files = fs.readdirSync(process.cwd())
    files.map(n => {
      fs.stat(path.join(currentPath, n), (error, stats) => {
        if(error) {
          console.error(error)
        }
        if(stats.isFile()){
          console.log(n)
        }
        if(stats.isDirectory()) {
          console.log(chalk.blue(n))
        }
      })
    })
  }
}

exports.cat = {
  run: function (pathString) {
    const currentPath = process.cwd()
    console.log(fs.readFileSync(pathString).toString())
  }
}

