'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('bricks_red', {
      url: "/bricks/red",
      templateUrl: "views/bricks.html",
      controller: "RedBricksCtrl as brick"
    });
    $stateProvider.state('bricks_green', {
      url: "/bricks/green",
      templateUrl: "views/bricks.html",
      controller: "GreenBricksCtrl as brick"
    });
    $stateProvider.state('bricks_blue', {
      url: "/bricks/blue",
      templateUrl: "views/bricks.html",
      controller: "BlueBricksCtrl as brick"
    });
    $stateProvider.state('cart', {
      url: "/cart",
      templateUrl: "views/cart.html",
      controller: "CartCtrl as cart"
    });
    $stateProvider.state('bricks_red.cart', {
      url: "/cart",
      templateUrl: "views/cart.html",
      controller: "CartCtrl as cart"
    });
    $stateProvider.state('bricks_green.cart', {
      url: "/cart",
      templateUrl: "views/cart.html",
      controller: "CartCtrl as cart"
    });
    $stateProvider.state('bricks_blue.cart', {
      url: "/cart",
      templateUrl: "views/cart.html",
      controller: "CartCtrl as cart"
    });
  }]);