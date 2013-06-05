#!/usr/bin/env node

var path = require('path');
var nico = require('nico');

exports.name = 'baseui';
exports.version = '1.0';
exports.lang = 'zh';

exports.reader = function(page) {
  var filename = page.meta.filepath.toLowerCase();
  if (filename === 'readme.md') {
    console.log('===========')
    page.filename = page.meta.filename = 'index';
    page.template = page.meta.template = 'index';
    page.meta.category = 'docs';
  }
  return page;
}
