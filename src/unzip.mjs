import AdmZip from 'adm-zip'
import chalk from 'chalk'
export default {
  run(zippedPath, zipPath) {
    let zip = new AdmZip(zippedPath)
    if(!zip) {
      console.error(chalk.red('找不到zip文件'))
      process.exit(0)
    }
    zip.extractAllTo(zipPath)
  }
}
