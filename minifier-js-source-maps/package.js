Package.describe({
  name: 'hexsprite:minifier-js',
  summary: "JavaScript minifier",
  version: "2.1.0",
  documentation: null,
  git: "https://github.com/hexsprite/minify-js-sourcemaps.git"
});

Npm.depends({
  "uglify-es": "3.0.27"
});

Package.onUse(function (api) {
  api.use('babel-compiler@6.18.2');
  api.export(['meteorJsMinify']);
  api.addFiles(['plugin/minify-js.js'], 'server');
});
