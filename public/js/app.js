require.config({
  paths: {
    jquery: 'libs/vendor/jquery/jquery',
    jqueryui: 'libs/vendor/jqueryui',
    touchpunch: 'libs/vendor/jqueryui/jquery.ui.touch-punch.min',
    cookie: 'libs/vendor/jquery/jquery.cookie',
    underscore: 'libs/vendor/underscore/underscore-extended',
      'underscore-keys': 'src/plugins/underscore/underscore-keys/underscore-keys',
    backbone: 'libs/vendor/backbone/backbone-extended',
      'backbone-mixins': 'src/plugins/backbone/backbone-mixins/backbone-mixins',
      'backbone-elements': 'src/plugins/backbone/backbone-elements/backbone-elements',
      'backbone-multiviews': 'src/plugins/backbone/backbone-multiviews/backbone-multiviews',
      'backbone-mediator': 'src/plugins/backbone/backbone-mediator/backbone-mediator',
      'backbone-shortcuts': 'src/plugins/backbone/backbone-shortcuts/backbone-shortcuts',
    text: 'libs/vendor/require/text',
    order: "libs/vendor/require/order",
    date: "libs/vendor/date/date",
    modelBinding: "libs/vendor/backbone/backbone.modelbinding",
    handlebars: "libs/vendor/handlebars/handlebars"
  }

});

require([
  'preload',
  'sampleton/app/app.view',
  'sampleton/app/app.router'
], function($, appView, appRouter){

  var app = new appView(),
      router = new appRouter();
  app.open();



});
