angular.module('app', ['beer-tab.auth', 'beer-tab.main', 'beer-tab.services', 'ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/auth/login.html',
        controller: 'AuthCtrl'
      }) 
      .when('/signup', {
        templateUrl: 'app/auth/signup.html',
        controller: 'AuthCtrl'
      })
      .when('/main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

  }]);