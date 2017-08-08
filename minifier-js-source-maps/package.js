Package.describe({
  name: 'zodern:minifier-js',
  summary: "JavaScript minifier",
  version: "2.0.0",
  documentation: null,
  git: "https://github.com/zodern/minify-js-sourcemaps.git"
});

Npm.depends({
  "uglify-es": "3.0.27"
});

Package.onUse(function (api) {
  api.use('babel-compiler@6.18.2');
  api.export(['meteorJsMinify']);
  api.addFiles(['plugin/minify-js.js'], 'server');
});
