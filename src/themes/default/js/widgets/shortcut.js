define(function (require, exports, module) {
  var $ = require('$');
  var shortcut = $('#shortcut');
  var shortcutPanel = $('#shortcut-panel');
  shortcut.on('touchend', function (e) {
    e.stopPropagation();
    if ($(this).hasClass('active')) {
      deactiveHandler();
    } else {
      activeHandler();
    }
  });
  shortcutPanel.on('touchend', function (e) {
    e.stopPropagation();
  });
  function deactiveHandler() {
    if (!shortcutPanel.hasClass('active')) return;
    shortcut.removeClass('active');
    if ($.browser.msie && $.browser.version < 10) {
      shortcutPanel.removeClass('active scale');
    } else {
      shortcutPanel.one('webkitAnimationEnd animationend',function () {
        $(this).removeClass('active scale out');
      }).addClass('scale out');
    }
    $(document).off('touchend', deactiveHandler);
  }

  function activeHandler() {
    if (shortcutPanel.hasClass('active')) return;
    shortcut.addClass('active');
    if ($.browser.msie && $.browser.version < 10) {
      shortcutPanel.addClass('active scale');
    } else {
      shortcutPanel.one('webkitAnimationEnd animationend',function () {
        $(this).addClass('active').removeClass('in');
      }).addClass('scale in');
    }

    $(document).on('touchend', deactiveHandler);
  }
});