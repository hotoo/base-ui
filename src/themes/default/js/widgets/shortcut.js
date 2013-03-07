define(function (require, exports, module) {
  var $ = require('$');
  var shortcut = $('#shortcut');
  var shortcutPanel = $('#shortcut-panel');
  var oldIE = $.browser.msie && $.browser.version;
  var tap = oldIE ? 'click' : tap;
  shortcut.on(tap, function (e) {
    e.stopPropagation();
    if ($(this).hasClass('active')) {
      deactiveHandler();
    } else {
      activeHandler();
    }
  });
  shortcutPanel.on(tap, function (e) {
    e.stopPropagation();
  });
  function deactiveHandler() {
    if (!shortcutPanel.hasClass('active')) return;
    shortcut.removeClass('active');
    if (oldIE) {
      shortcutPanel.removeClass('active scale');
    } else {
      shortcutPanel.one('webkitAnimationEnd animationend',function () {
        $(this).removeClass('active scale out');
      }).addClass('scale out');
    }
    $(document).off(tap, deactiveHandler);
  }

  function activeHandler() {
    if (shortcutPanel.hasClass('active')) return;
    shortcut.addClass('active');
    if (oldIE) {
      shortcutPanel.addClass('active scale');
    } else {
      shortcutPanel.one('webkitAnimationEnd animationend',function () {
        $(this).addClass('active').removeClass('in');
      }).addClass('scale in');
    }

    $(document).on(tap, deactiveHandler);
  }
});