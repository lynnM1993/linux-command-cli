import path from 'path'
import fs from 'fs'
import AdmZip from 'adm-zip'
import chalk from 'chalk'
export default {
  run(zipPath, zippedPath) {
    let zip = new AdmZip();
    const files = fs.readdirSync(zipPath)
    files.map(n => {
      const filePath = path.join(zipPath, n)
     try{
       const stat = fs.statSync(filePath)
       if(stat.isFile()) {
         zip.addLocalFile(filePath)
       }
       if(stat.isDirectory()) {
         zip.addLocalFolder(filePath, n)
       }
     }catch (e) {
        console.error(chalk.red(e))
     }
    })
    zip.writeZip(zippedPath, (error, data) => {
      if(error) {
        console.error(chalk.red(error))
      }
    })
  }
}
