#!/usr/bin/env node
const {ls} = require('../src/linux');
process.title = 'ls';

ls.run();
