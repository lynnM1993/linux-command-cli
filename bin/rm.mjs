#!/usr/bin/env node
import rm from '../src/rm.mjs'
import chalk from 'chalk';
const argvs = process.argv
const type = argvs[2]
const rmPath = argvs[3]
if(!type || !rmPath) {
  console.error(chalk.red('格式错误 rm [options] <path|file>'))
}

rm.run(rmPath)
