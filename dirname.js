'use strict';

import { dirname } from 'path';

/**
 * @name __dirname
 * @param {Object} importMetaUrl Url object
 * @returns {String} Url string
 * @description ES6 port of Node.js's commonjs `__dirname` global varible for
 * projects with `type: module` in package.json.
 * @example `const dirname = __dirname();
 */
function __dirname(importMetaUrl = import.meta.url) {
  return dirname(new URL(importMetaUrl).pathname);
}

console.log(__dirname());

export default __dirname;
