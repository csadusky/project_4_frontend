(function customersAppIIFE(){
  var app = angular.module('beachesApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/beaches/:name',
            {
              controller: 'beachesController',
              controllerAs: 'beachesCtrl',
              templateUrl: 'app/views/beaches.html',

            }
           )
      .otherwise({redirectTo: '/'});
  });

})();

