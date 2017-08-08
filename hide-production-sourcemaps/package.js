Package.describe({
  name: 'hexsprite:hide-production-sourcemaps',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Hide sourcemaps in production',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hexsprite/minify-js-sourcemaps.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  prodOnly: true
});

Package.onUse(function(api) {
  api.use('webapp@1.3.14');
  api.addFiles('hide-production-sourcemaps.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('hexsprite:hide-production-sourcemaps');
});
