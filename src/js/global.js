define(function (require, exports, module) {
  var $ = require('$');
  $(document).on({
    'touchstart': function () {
      $(this).addClass('touch');
    },
    'touchend': function () {
      $(this).removeClass('touch');
    }
  }, '.ui-touch');
});