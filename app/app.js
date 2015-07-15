(function customersAppIIFE(){
  var app = angular.module('beachesApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'beachesController',
              controllerAs: 'beachesCtrl',
              templateUrl: 'app/views/beaches.html',

            }
           )

      .when('/beaches',
            {
              controller: 'beachesController',
              controllerAs: 'beachesCtrl',
              templateUrl: 'app/views/beaches.html',

            }
           )
      .when('/beaches/name',
            {
              controller: 'beachesController',
              controllerAs: 'beachesCtrl',
              templateUrl: 'app/views/beaches.html',

            }
           )
      .otherwise({redirectTo: '/beaches'});
  });

})();

