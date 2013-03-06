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
    shortcutPanel.one('webkitAnimationEnd animationend',function () {
      $(this).removeClass('active scale out');
    }).addClass('scale out');
    $(document).off('click', deactiveHandler);
  }

  function activeHandler() {
    if (shortcutPanel.hasClass('active')) return;
    shortcut.addClass('active');
    shortcutPanel.one('webkitAnimationEnd animationend',function () {
      $(this).addClass('active').removeClass('in');
    }).addClass('scale in');

    $(document).on('click', deactiveHandler);
  }
});