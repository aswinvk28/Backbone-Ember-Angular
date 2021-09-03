'use strict';

/**
 * @ngdoc function
 * @name controllerQuizApp.controller:BrickCtrl
 * @description
 * # BrickCtrl
 * Controller of the controllerQuizApp
 */
angular.module('controllerQuizApp')
  .controller('BrickCtrl', function () {
    this.price = 0.03;
    this.size = "2 x 6";
    this.quantity = 697;
    this.color = "Green";
  });
