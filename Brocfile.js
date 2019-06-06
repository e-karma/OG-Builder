/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var compileSass = require('broccoli-sass');
var mergeTrees  = require('broccoli-merge-trees');

// This array is similar to rails @import in the main application.scss
var sassSources = [
    'app/styles'
  ];
var extraAssets = pickFiles('vendor/bootstrap/dist/fonts',{
    srcDir: '/', 
    files: ['**/*'],
    destDir: '/fonts'
});
var extraFonts = pickFiles('vendor/font-awesome/fonts',{
    srcDir: '/', 
    files: ['**/*'],
    destDir: '/fonts'
});

var appCss = compileSass(sassSources, 'app.custom_scss',
  'assets/app.css');
var app = new EmberApp();
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');

app.import('vendor/summernote/dist/summernote.css');
app.import('vendor/summernote/dist/summernote-bs3.css');
app.import('vendor/summernote/dist/summernote.js');

app.import('vendor/jquery-minicolors/jquery.minicolors.js');
app.import('vendor/jquery-minicolors/jquery.minicolors.css');
var minicolorsAssets = pickFiles('vendor/jquery-minicolors/', {
  srcDir: '/',
  files: ['**/*.png'],
  destDir: '/assets'
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = mergeTrees([app.toTree(),
                            appCss,
                            extraAssets,
                            extraFonts,
                            minicolorsAssets], {overwrite: true});
