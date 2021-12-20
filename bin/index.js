#!/usr/bin/env node
'use strict';

const program = require('commander');
const { version } = require('../package.json');

program
  .version(version)
  .usage('[options]')
  // TODO
  // .option('--build', 'Build app out to static assets')
  .action(async options => {
    await (options.build ? import('./build.js') : import('./start.js'));
  })
  .parse(process.argv);
