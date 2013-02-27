define(function (require, exports, module) {
  var $ = require('$');
  var shortcut = $('#shortcut');
  var shortcutPanel = $('#shortcut-panel');
  shortcut.on('click', function (e) {
    e.stopPropagation();
    if ($(this).hasClass('active')) {
      deactiveHandler();
    } else {
      activeHandler();
    }
  });

  shortcutPanel.on('click', function (e) {
    e.stopPropagation();
  });
  function deactiveHandler() {
    if (!shortcutPanel.hasClass('active')) return;
    shortcut.removeClass('active');
    shortcutPanel.animate({opacity: 0, scale: 0}, {
      duration: 200,
      complete: function () {
        $(this).hide().removeClass('active');
      }
    });
    $(document).off('click', deactiveHandler);
  }

  function activeHandler() {
    if (shortcutPanel.hasClass('active')) return;
    shortcut.addClass('active');
    shortcutPanel.show().animate({opacity: .8, scale: 1}, {
      duration: 200,
      complete: function () {
        $(this).addClass('active');
      }
    });
    $(document).on('click', deactiveHandler);
  }
});