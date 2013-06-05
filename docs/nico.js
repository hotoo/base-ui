var path = require('path');
exports.theme = path.join(__dirname, '_themes/baseui');
exports.source = __dirname;
exports.output = path.join(__dirname, '../../baseui-pages');
exports.permalink = '{{directory}}/{{filename}}.html';
exports.ignorefilter = function(filepath, subdir) {
  if (/^(_site|_themes|node_modules)/.test(subdir)) {
    return false;
  }
  return true;
}
exports.writers = [
  'nico.PageWriter',
  'nico.StaticWriter'
]
