Package.describe({
  name: 'hexsprite:minifier-js',
  summary: "JavaScript minifier",
  version: "2.1.1",
  documentation: null,
  git: "https://github.com/hexsprite/minify-js-sourcemaps.git"
});

Npm.depends({
  "uglify-js": "3.0.28"
});

Package.onUse(function (api) {
  api.use('babel-compiler@6.18.2');
  api.export(['meteorJsMinify']);
  api.addFiles(['plugin/minify-js.js'], 'server');
});
