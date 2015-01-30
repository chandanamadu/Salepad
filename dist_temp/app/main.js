require.config({"paths":{"jquery":"../bower_components/jquery/jquery","knockout":"../bower_components/knockout.js/knockout.debug","text":"../bower_components/requirejs-text/text","durandal":"../bower_components/durandal/js","plugins":"../bower_components/durandal/js/plugins","transitions":"../bower_components/durandal/js/transitions","fastclick":"../bower_components/fastclick/lib/fastclick","IconicJS":"../bower_components/foundation-apps/js/vendor/iconic.min","q":"../bower_components/q/q","breeze":"../bower_components/breezejs/breeze.debug","durandal.punches":"../bower_components/durandal.punches/build/output/durandal.punches","assert":"../node_modules/rtts-assert/dist/amd/assert"},"map":{"*":{"di":"../node_modules/di/dist/amd/index","durandal.forge":"../bower_components/durandal.forge/dist/amd/index","Q":"q"}},"deps":["main","../bower_components/durandal-foundation/dialog","../bower_components/durandal-foundation/motion","../bower_components/durandal-foundation/bindings"],"baseUrl":"app"});

// require.config({"paths":{"jquery":"../bower_components/jquery/jquery","knockout":"../bower_components/knockout.js/knockout.debug","text":"../bower_components/requirejs-text/text","durandal":"../bower_components/durandal/js","plugins":"../bower_components/durandal/js/plugins","transitions":"../bower_components/durandal/js/transitions","fastclick":"../bower_components/fastclick/lib/fastclick","IconicJS":"../bower_components/foundation-apps/js/vendor/iconic.min","q":"../bower_components/q/q","breeze":"../bower_components/breezejs/breeze.debug","durandal.punches":"../bower_components/durandal.punches/build/output/durandal.punches","assert":"../node_modules/rtts-assert/dist/amd/assert"},"map":{"*":{"di":"../node_modules/di/dist/amd/index","durandal.forge":"../bower_components/durandal.forge/dist/amd/index","Q":"q"}},"deps":["main","../bower_components/durandal-foundation/dialog","../bower_components/durandal-foundation/motion","../bower_components/durandal-foundation/bindings"],"baseUrl":"app"});

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