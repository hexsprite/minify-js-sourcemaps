const uglify = Npm.require('uglify-js');

meteorJsMinify = function(filename, source, sourcemap) {
  var result = {};

  const sourceMap = typeof sourcemap === 'object' ? sourcemap : JSON.parse(sourcemap);
  try {
  // var minified = uglify.minify({[filename]: source}, {
  var minified = uglify.minify(source, {
      compress: {
        drop_debugger: false,
        unused: false,
        dead_code: false,
      },
      sourceMap: {
        content: sourceMap,
        filename: 'app.js',
        // url: 'production.min.map'
      },
      // outFileName: 'app.js',
      // outSourceMap: "production.min.map",
      // sourceMapUrl: false,
      // Some sourcemaps are objects, and some are strings
      // inSourceMap:
      warnings: true
    });
    if (minified.error) {
      throw minified.error
    }
    result.code = minified.code;
    result.sourcemap = minified.map;
  } catch (e) {
    console.log(`uglify failed, using slow Babel minify: filename=${filename} line=${e.line} col=${e.col} pos=${e.pos} message=${e.message}`);
    // Although Babel.minify can handle a wider variety of ECMAScript
    // 2015+ syntax, it is substantially slower than UglifyJS, so we use
    // it only as a fallback.
    minified = Babel.minify(source, {filename, sourceMaps: true, inputSourceMap: sourceMap})
    result.code = minified.code
    result.sourcemap = minified.map
  }

  return result;
};
