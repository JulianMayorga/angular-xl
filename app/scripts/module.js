'use strict';

var components = angular.module('prueba.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('prueba', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'prueba.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'ngTouch'
]);
angular.componentFactory.moduleDecorator(app);