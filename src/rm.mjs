import fs from 'fs'
import chalk from 'chalk'
import fsE from 'fs-extra'
export default {
  run(rmPath) {
    try {
      const stat = fs.statSync(rmPath)
      if(stat.isFile()) {
        fs.rm(rmPath, (error) => {
          if(error) {
            console.error(chalk.red(error))
          }
        })
      }
      if(stat.isDirectory()) {
        fsE.remove(rmPath, (error) => {
          if(error) {
            console.error(chalk.red(error))
          }
        })
      }
    }catch (e) {

      console.error(chalk.red(e))
    }
  }
}
