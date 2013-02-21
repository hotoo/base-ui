define(function (require, exports, module) {
  var $ = require('$');
  $(document).on({
    'click': function () {
      if ($(this).prop('disabled')) return;
      var container = $(this).closest('.ui-checkbox');
      if ($(this).prop('checked')) {
        container.addClass('ui-checkbox-checked');
      } else {
        container.removeClass('ui-checkbox-checked');
      }
    }
  }, '.ui-checkbox input');
});