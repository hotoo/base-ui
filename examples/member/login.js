define(function (require, exports, module) {
  var $ = require('$');
  var AutoComplete = require('../../src/js/widgets/autocomplete');

  var dataSource = ['126.com', '163.com', 'qq.com'];

  function dataMaker(prefix, suffix) {
    var data = [];
    $.each(dataSource, function (i, value) {
      if (suffix) {
        if (value.indexOf(suffix) === 0) {
          data.push([prefix, value].join('@'));
          return false;
        }
      } else {
        data.push([prefix, value].join('@'));
      }
    });
    return data;
  }

  new AutoComplete({
    trigger: '#account',
    parentNode: '#account-list',
    dataSource: function (value) {
      if (value) {
        var v = value.split('@');
        return dataMaker(v[0], v[1]);
      }
      return [];
    }
  });
});