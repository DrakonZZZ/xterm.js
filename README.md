# [![xterm.js logo](logo-full.png)](https://xtermjs.org)

Xterm.js is a front-end component written in TypeScript that lets applications bring fully-featured terminals to their users in the browser. It's used by popular projects such as VS Code, Hyper and Theia.

## Features

- **Terminal apps just work**: Xterm.js works with most terminal apps such as `bash`, `vim`, and `tmux`, including support for curses-based apps and mouse events.
- **Performant**: Xterm.js is *really* fast, it even includes a GPU-accelerated renderer.
- **Rich Unicode support**: Supports CJK, emojis, and IMEs.
- **Self-contained**: Requires zero dependencies to work.
- **Accessible**: Screen reader and minimum contrast ratio support can be turned on.
- **And much more**: Links, theming, addons, well documented API, etc.

## What xterm.js is not

- Xterm.js is not a terminal application that you can download and use on your computer.
- Xterm.js is not `bash`. Xterm.js can be connected to processes like `bash` and let you interact with them (provide input, receive output).

## Getting Started

First, you need to install the module, we ship exclusively through [npm](https://www.npmjs.com/), so you need that installed and then add xterm.js as a dependency by running:

```bash
npm install @xterm/xterm
```

To start using xterm.js on your browser, add the `xterm.js` and `xterm.css` to the head of your HTML page. Then create a `<div id="terminal"></div>` onto which xterm can attach itself. Finally, instantiate the `Terminal` object and then call the `open` function with the DOM object of the `div`.

```html
<!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="node_modules/@xterm/xterm/css/xterm.css" />
      <script src="node_modules/@xterm/xterm/lib/xterm.js"></script>
    </head>
    <body>
      <div id="terminal"></div>
      <script>
        var term = new Terminal();
        term.open(document.getElementById('terminal'));
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
      </script>
    </body>
  </html>
```

### Importing

The recommended way to load xterm.js is via the ES6 module syntax:

```javascript
import { Terminal } from '@xterm/xterm';
```

### Addons

⚠️ *This section describes the new addon format introduced in v3.14.0, see [here](https://github.com/xtermjs/xterm.js/blob/3.14.2/README.md#addons) for the instructions on the old format*

Addons are separate modules that extend the `Terminal` by building on the [xterm.js API](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts). To use an addon, you first need to install it in your project:

```bash
npm i -S @xterm/addon-web-links
```

Then import the addon, instantiate it and call `Terminal.loadAddon`:

```ts
import { Terminal } from '@xterm/xterm';
import { WebLinksAddon } from '@xterm/addon-web-links';

const terminal = new Terminal();
// Load WebLinksAddon on terminal, this is all that's needed to get web links
// working in the terminal.
terminal.loadAddon(new WebLinksAddon());
```

The xterm.js team maintains the following addons, but anyone can build them:

- [`@xterm/addon-attach`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-attach): Attaches to a server running a process via a websocket
- [`@xterm/addon-canvas`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-canvas): Renders xterm.js using a `canvas` element's 2d context
- [`@xterm/addon-clipboard`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-clipboard): Access the browser's clipboard
- [`@xterm/addon-fit`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-fit): Fits the terminal to the containing element
- [`@xterm/addon-image`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-image): Adds image support
- [`@xterm/addon-search`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-search): Adds search functionality
- [`@xterm/addon-serialize`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-serialize): Serializes the terminal's buffer to a VT sequences or HTML
- [`@xterm/addon-unicode11`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-unicode11): Updates character widths to their unicode11 values
- [`@xterm/addon-web-links`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-web-links): Adds web link detection and interaction
- [`@xterm/addon-webgl`](https://github.com/xtermjs/xterm.js/tree/master/addons/addon-webgl): Renders xterm.js using a `canvas` element's webgl2 context

## Browser Support

Since xterm.js is typically implemented as a developer tool, only modern browsers are supported officially. Specifically the latest versions of *Chrome*, *Edge*, *Firefox*, and *Safari*.

Xterm.js works seamlessly in [Electron](https://electronjs.org/) apps and may even work on earlier versions of the browsers. These are the versions we strive to keep working.

### Node.js Support

We also publish [`xterm-headless`](https://www.npmjs.com/package/xterm-headless) which is a stripped down version of xterm.js that runs in Node.js. An example use case for this is to keep track of a terminal's state where the process is running and using the serialize addon so it can get all state restored upon reconnection.

## API

The full API for xterm.js is contained within the [TypeScript declaration file](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts), use the branch/tag picker in GitHub (`w`) to navigate to the correct version of the API.

Note that some APIs are marked *experimental*, these are added to enable experimentation with new ideas without committing to support it like a normal [semver](https://semver.org/) API. Note that these APIs can change radically between versions, so be sure to read release notes if you plan on using experimental APIs.

## Releases

Xterm.js follows a monthly release cycle roughly.

All current and past releases are available on this repo's [Releases page](https://github.com/sourcelair/xterm.js/releases), you can view the [high-level roadmap on the wiki](https://github.com/xtermjs/xterm.js/wiki/Roadmap) and see what we're working on now by looking through [Milestones](https://github.com/sourcelair/xterm.js/milestones).

### Beta builds

Our CI releases beta builds to npm for every change that goes into master. Install the latest beta build with:

```bash
npm install -S @xterm/xterm@beta
```

These should generally be stable, but some bugs may slip in. We recommend using the beta build primarily to test out new features and to verify bug fixes.

## Contributing

You can read the [guide on the wiki](https://github.com/xtermjs/xterm.js/wiki/Contributing) to learn how to contribute and set up xterm.js for development.


Do you use xterm.js in your application as well? Please [open a Pull Request](https://github.com/sourcelair/xterm.js/pulls) to include it here. We would love to have it on our list. Note: Please add any new contributions to the end of the list only.

## License Agreement

If you contribute code to this project, you implicitly allow your code to be distributed under the MIT license. You are also implicitly verifying that all code is your original work.

Copyright (c) 2017-2022, [The xterm.js authors](https://github.com/xtermjs/xterm.js/graphs/contributors) (MIT License)<br>
Copyright (c) 2014-2017, SourceLair, Private Company ([www.sourcelair.com](https://www.sourcelair.com/home)) (MIT License)<br>
Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
