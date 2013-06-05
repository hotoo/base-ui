var path = require('path');

exports.theme = path.join(process.cwd(), '_themes/baseui')
exports.source = process.cwd()
exports.output = path.join(process.cwd(), '_site')
console.log('======:'+process.cwd());
exports.permalink = '{{directory}}/{{filename}}.html'
exports.ignorefilter = function(filepath, subdir) {
  if (/^(_site|_theme|node_modules)/.test(subdir)) {
    return false;
  }
  return true;
}
exports.writers = [
  'nico.PageWriter',
  'nico.StaticWriter',
  'nico.FileWriter'
]
