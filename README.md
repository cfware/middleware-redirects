# @cfware/middleware-redirects

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

This is a basic middleware for handling static redirects.  I use it for internal
testing within `gulp serve`.  Chances are good it does not provide for your needs.

### Install @cfware/middleware-redirects

```sh
npm i --save-dev @cfware/middleware-redirects
```

## Usage

```js
'use strict';

const connect = require('connect');
const redirects = require('@cfware/middleware-redirects');

// create app
const app = connect();

// Setup middleware to perform redirects
app.use(redirects({
	'/': '/my-app/',
	'/downloads': '/pub/my-app/',
	'/downloads/': '/pub/my-app/',
}));

// Start the server on a random port at localhost.
const server = app.listen(0, 'localhost', () => {
	const addr = server.address();

	console.log(`Example app listening at http://${addr.address}:${addr.port}`);
});
```

## Running tests

The only test currently provided is eslint.

```sh
npm install
npm test
```

[npm-image]: https://img.shields.io/npm/v/@cfware/middleware-redirects.svg
[npm-url]: https://npmjs.org/package/@cfware/middleware-redirects
[downloads-image]: https://img.shields.io/npm/dm/@cfware/middleware-redirects.svg
[downloads-url]: https://npmjs.org/package/@cfware/middleware-redirects
[license-image]: https://img.shields.io/github/license/cfware/middleware-redirects.svg
