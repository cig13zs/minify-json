const assert = require('assert');
const MinifyJSON = require('./core');

const raw = '{\n  "a": 1,\n  "b": [2, 3]\n}';
const res = MinifyJSON.minify(raw);
assert.strictEqual(res.minified, '{"a":1,"b":[2,3]}');
assert.strictEqual(res.miniSize < res.origSize, true);
console.log('ok, all MinifyJSON assertions passed');
