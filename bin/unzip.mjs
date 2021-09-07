#!/usr/bin/env node
import chalk from 'chalk'
import path from 'path'
import unzip from '../src/unzip.mjs'
const zippedPath = process.argv[2]
const zipPath = process.argv[3] || ''
const cwd = process.cwd()

if(!zippedPath) {
  console.error(chalk.red('格式错误,zip <zippedPath> <unzipPath>'))
  process.exit(0)
}

unzip.run(path.join(cwd, zippedPath), path.join(cwd, zipPath));
