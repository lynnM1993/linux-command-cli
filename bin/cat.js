#!/usr/bin/env node
const {cat} = require('../src/linux');
process.title = 'll';
const fileName = process.argv[2]
cat.run(fileName)

