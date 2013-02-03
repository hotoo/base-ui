define(function (require, exports, module) {
  var $ = require('$');
  $(document).on({
    'change': function () {
      var container = $(this).closest('.ui-select');
      $('label', container).text($($('option', this)[this.selectedIndex]).text());
    }
  }, '.ui-select select');
});