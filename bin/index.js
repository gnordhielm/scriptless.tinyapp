#!/usr/bin/env node
'use strict';

const program = require('commander');
const { version } = require('../package.json');
const buildApp = require('./buildApp');

program
  .version(version)
  .option('--from [path]', 'Path to the file where you call `makeTinyapp`')
  .option('--to [path]', 'Directory to write your app to.')
  .option(
    '--develop',
    'Set to `true` to run your app with hot reloading and all that fun stuff.'
  )
  .option('--port [port]', 'Port to serve your app on.')
  .parse(process.argv);

const options = {
  from: program.from || './src',
  to: program.to || './public',
  develop: program.develop || false,
  port: program.port || '3000'
};

buildApp(options);
