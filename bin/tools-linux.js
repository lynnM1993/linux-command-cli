#!/usr/bin/env node

const program = require('commander');
const {ls, ll, cat} = require('../src/linux');


/**
 * Usage.
 */

program
  .command('ls')
  .description('类似linux中的ls的命令')
  .parse(process.argv)
  .action(function () {
    ls.run();
  });

program
  .command('ll')
  .description('类似linux中的ll的命令')
  .parse(process.argv)
  .action(function () {
    ll.run();
  });

program
  .command('cat <path>')
  .description('类似linux中的cat的命令')
  .parse(process.argv)
  .action(function (path) {
    cat.run(path);
  });


program.parse(process.argv);
