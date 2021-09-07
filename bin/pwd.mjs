#!/usr/bin/env node
import chalk from 'chalk'
process.title = 'pwd';
console.log(chalk.blue(process.cwd()))
process.exit(0)
