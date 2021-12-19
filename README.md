# @scriptless/tinyapp

[![npm](https://img.shields.io/npm/dt/@scriptless/tinyapp.svg?style=flat-square)](https://www.npmjs.com/package/@scriptless/tinyapp)
[![npm](https://img.shields.io/npm/v/@scriptless/tinyapp.svg?style=flat-square)](https://www.npmjs.com/package/@scriptless/tinyapp)

A tool for generating minimal setup React apps.

## Getting Started

Install with `npm install @scriptless/tinyapp`.

```bash
# Build once and walk away
$ tinyapp

# Build with development bells and whistles on a custom port
$ tinyapp --develop --port=3001
```

---

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

### CLI

Run in a project with tinyapp installed by simply running `tinyapp`.

| Option  | Default         | Type     | Description                                                          |
| ------- | --------------- | -------- | -------------------------------------------------------------------- |
| from    | Try to find src | {string} | Path your entrypoint.                                                |
| to      | 'build'         | {string} | Directory to write your app to.                                      |
| develop | `false`         | {bool}   | Set to `true` to run your app with reloading and all that fun stuff. |
| port    | 3000            | {string} | Port to serve your app on.                                           |
