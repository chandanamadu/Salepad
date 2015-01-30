var isNode = typeof exports != 'undefined';
var isDist = isNode;

var bower, npm;

if(isDist){
  bower = '../bower_components';
  npm = '../node_modules';
}
else {
  bower = '../../bower_components';
  npm = '../../node_modules';
}

var REQUIREJS_CONFIG = {
  paths: {
    'jquery': bower + '/jquery/jquery',
    'knockout': bower + '/knockout.js/knockout.debug',
    'text': bower + '/requirejs-text/text',
    'durandal': bower + '/durandal/js',
    'plugins': bower + '/durandal/js/plugins',
    'transitions': bower + '/durandal/js/transitions',
    'fastclick': bower + '/fastclick/lib/fastclick',
    'IconicJS': bower + '/foundation-apps/js/vendor/iconic.min',
    'q'      : bower + '/q/q',
    'breeze' : bower + '/breezejs/breeze.debug',
    


    'durandal.punches': bower + '/durandal.punches/build/output/durandal.punches',
    'assert': npm + '/rtts-assert/dist/amd/assert',
  },
  map: {
    '*': {
      'di': npm + '/di/dist/amd/index',
      'durandal.forge': bower + '/durandal.forge/dist/amd/index',
      'Q': 'q',
    }
  },
  deps: [
    'main',
  	bower + '/durandal-foundation/dialog',
  	bower + '/durandal-foundation/motion',
  	bower + '/durandal-foundation/bindings',
    // 'q',
    // 'breeze',
    // 'jquery',
    
  ],
  baseUrl: (isDist ? '' : '/build/') + 'app',
};

if(isNode){
  module.exports = REQUIREJS_CONFIG;
}