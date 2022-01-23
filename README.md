# dirname.js

ES6 `__dirname` utility.

This is an ES module that exposes a function that returns the equivalent of the commonjs global `__dirname` variable.

## Install

`npm install --save-dev @bzelip/dirname`

## API

### Usage

_`dirname(importMetaUrl)`_

Returns absolute path of file.

Example:

```js
import dirname from '@bzelip/__dirname';

const __dirname = dirname(import.meta.url);
```

### Option

_`<importMetaUrl>`_

URL object, as returned from [`import.meta.url`](https://nodejs.org/api/all.html#all_esm_importmetaurl);

## Author

Brian Zelip, https://zelip.me

## References

- David Herron (2018). [Implementing \_\_dirname in ES6 modules using import.meta.url](https://techsparx.com/nodejs/esnext/dirname-es-modules.html)

## LICENSE

MIT
