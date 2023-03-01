'use strict';

const fetcher = require('..');
const assert = require('assert').strict;

assert.strictEqual(fetcher(), 'Hello from fetcher');
console.info('fetcher tests passed');
