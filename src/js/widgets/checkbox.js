define(function (require, exports, module) {
  var $ = require('$');
  $(document).on({
    'tap': function () {
      if ($(this).hasClass('ui-checkbox-disabled')) return;
      if ($(this).hasClass('ui-checkbox-checked')) {
        $(this).removeClass('ui-checkbox-checked')
        $('input', this).prop('checked', false);
      } else {
        $(this).addClass('ui-checkbox-checked')
        $('input', this).prop('checked', true);

      }
    }
  }, '.ui-checkbox');
});