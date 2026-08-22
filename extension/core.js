;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MinifyJSON = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  function minify(jsonString, options) {
    options = options || {};
    const parsed = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
    const minified = JSON.stringify(parsed);
    const origSize = typeof jsonString === 'string' ? jsonString.length : minified.length;
    const miniSize = minified.length;
    const saved = origSize - miniSize;
    const pct = origSize > 0 ? ((saved / origSize) * 100).toFixed(1) : 0;
    return {
      minified: minified,
      origSize: origSize,
      miniSize: miniSize,
      savedBytes: saved,
      compressionPct: pct + '%'
    };
  }

  function format(jsonString, spaces) {
    spaces = spaces != null ? spaces : 2;
    const parsed = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
    return JSON.stringify(parsed, null, spaces);
  }

  return { minify: minify, format: format };
});
