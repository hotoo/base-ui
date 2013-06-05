var path = require('path');
exports.theme = path.join(__dirname, '_theme');
exports.source = path.join(__dirname, 'docs');
exports.output = path.join(__dirname, '../../baseui-pages');
exports.permalink = '{{directory}}/{{filename}}.html';
exports.ignorefilter = function(filepath, subdir) {
  if (/^(_site|_theme|node_modules)/.test(subdir)) {
    return false;
  }
  return true;
}
exports.writers = [
  'nico.PageWriter',
  'nico.StaticWriter'
]
