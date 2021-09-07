const fsE = require('fs-extra')
const fs = require('fs')
const path = require('path')


function generagePage(type, name) {
    const root = process.cwd()
    fsE.mkdirpSync(name)
    fs.readdirSync(path.join(__dirname, type)).map(n => {
        // 创建目录
        const readstream = fs.createReadStream(path.join(__dirname,type,n))
        const writeStream = fs.createWriteStream(path.join(root, name, n))
        readstream.pipe(writeStream)
    })
}



exports.run = function (type, name) {
    generagePage(type, name)
}
