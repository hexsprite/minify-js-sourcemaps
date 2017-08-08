Package.describe({
  name: 'hexsprite:standard-minifier-js',
  version: '2.1.1',
  summary: 'Javascript minifier that creates production sourcemap',
  documentation: '../readme.md',
  git: 'https://github.com/hexsprite/minify-js-sourcemaps.git'
});

Package.registerBuildPlugin({
  name: 'minifyStdJS',
  use: ['sanjo:meteor-files-helpers@1.2.0_1', 'hexsprite:minifier-js@2.0.1'],
  sources: ['plugin/minify-js.js'],
  npmDependencies: {
  'concat-with-sourcemaps': '1.0.4'
  }
});


Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});
