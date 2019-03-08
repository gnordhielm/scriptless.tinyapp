# @scriptless/tinyapp

A tool for generating minimal setup React apps.

## Getting Started

First, create an entry point file. This will replace the `ReactDom.render` step and serve as a config file for tinyapp.

```jsx
// src/index.js

import './styles/main.scss';
import App from './components/App';
import makeTinyapp from '@scriptless/tinyapp';

export default makeTinyapp({
  title: 'My Docs',
  render: <App />,
  writeTo: './dist'
});
```

To actually build the app, use the CLI the library provides:

```bash
# Build once and walk away
$ tinyapp

# Build with development bells and whistles on a custom port
$ tinyapp --develop --port=3001
```

To enter the dev environment,

It's recommended that you tie these scripts to npm setup, especially if you need to add some custom configuration. For example:

```json
// package.json
    ...
    "scripts" {
        "build": "tinyapp --from='./source/index.js' --to='./dist/'",
        "start": "tinyapp --from='./source/index.js' --develop"
    }
    ...
```

Note that while tinyapp does take care of all the bundling tools, you'll want to include `react` and `react-dom` yourself.

## Config

### makeTinypp

The default (and only) export.

Accepts/expects the following config options:

| Option | Default       | Type     | Description                                |
| ------ | ------------- | -------- | ------------------------------------------ |
| title  | "My Tiny App" | {string} | Page title for your app.                   |
| render | (required)    | {node}   | The app to render at the root of your app. |

### CLI

Run in a project with tinyapp installed by simply running `tinyapp`.

| Option  | Default       | Type     | Description                                                                                                                                       |
| ------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| from    | './src/index' | {string} | Path to the file where you call `makeTinyapp`.                                                                                                    |
| to      | './public'    | {string} | Directory to write your app to. Tinyapp will clear this directory automatically, and can handle creating the path to it if any steps are missing. |
| develop | `false`       | {bool}   | Set to `true` to run your app with hot reloading and all that fun stuff.                                                                          |
| port    | 3000          | {string} | Port to serve your app on.                                                                                                                        |
