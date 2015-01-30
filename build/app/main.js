define(["durandal/system", "durandal/app", "durandal/viewLocator", "durandal.forge"], function($__0,$__2,$__4,$__6) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  var system = $__0.default;
  var app = $__2.default;
  var viewLocator = $__4.default;
  var init = $__6.init;
  init();
  system.debug(true);
  app.title = 'Durandal Starter Kit';
  app.configurePlugins({
    router: true,
    dialog: true,
    widget: true
  });
  app.start().then(function() {
    viewLocator.useConvention();
    app.setRoot('shell/shell', 'motion');
  });
  return {};
});

//# sourceMappingURL=main.map
//# sourceURL=app/main.js