#!/usr/bin/env node

const program = require('commander');
const toolsGenerate = require('../src/generate1');
/**
 * Usage.
 */

program
.command('generate <type> <name>')
  .description('quick generate your file')
  .alias('g')
  .parse(process.argv)
  .action(function (type, name) {
      toolsGenerate.run(type, name);
  });

program.parse(process.argv);
