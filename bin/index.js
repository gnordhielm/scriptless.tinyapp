#!/usr/bin/env node
'use strict';

const program = require('commander');
const { version } = require('../package.json');

program
  .version(version)
  .usage('[options]')
  .option('--from [path]', 'Entrypoint.')
  .option('--to [path]', 'Directory to write your app to. Defaults to `build`')
  .option(
    '--develop',
    'Set to `true` to run your app with fast refresh and all that fun stuff (--dev also works).',
  )
  .option('--port [port]', 'Port to serve your app on.')
  .action(async options => {
    const isDev = options.develop || options.dev || false;
    // const from = path.resolve(process.cwd(), options.from);
    // const to = path.resolve(process.cwd(), options.to || './build');
    // const port = options.port || '3000';
    await (isDev ? import('./start.js') : import('./build.js'));
  })
  .parse(process.argv);
