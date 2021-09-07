#!/usr/bin/env node
import chalk from 'chalk'
import path from 'path'
import zip from '../src/zip.mjs'
const zipPath = process.argv[2]
const zippedPath = process.argv[3]
const cwd = process.cwd()

if(!zipPath || !zippedPath) {
  console.error(chalk.red('格式错误,zip <zipPath> <zippedPath>'))
  process.exit(0)
}

zip.run(path.join(cwd, zipPath), path.join(cwd, zippedPath));
