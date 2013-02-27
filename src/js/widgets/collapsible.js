define(function (require, exports, module) {
  var $ = require('$');
  $(document).on({
    'click': function () {
      var container = $(this).closest('.ui-collapsible');
      if (container.hasClass('ui-collapsible-expand')) {
        container.removeClass('ui-collapsible-expand');
        $('.ui-collapsible-content', container).hide();
      } else {
        container.addClass('ui-collapsible-expand');
        $('.ui-collapsible-content', container).show();
      }
    }
  }, '.ui-collapsible-handle');
});