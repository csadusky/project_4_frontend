(function beachesFactoryIIFE(){

  // Create a beaches factory
  var beachesFactory = function($http){
    // beaches is private, only available in this scope

    var factory = {};
    factory.beaches = [];
    factory.beach = {};

    factory.getBeaches = function(){
      return $http.get('http://localhost:3000/beaches').success(function(response){
        angular.copy(response, factory.beaches);
      });
    };

    factory.getBeach = function(name){
      return  $http.get('http://localhost:3000/beaches/' + name).success(function(response){
        angular.copy(response, factory.beach);
      });
    };

    return factory;
  };

  beachesFactory.$inject = ['$http'];

  angular.module('beachesApp').factory('beachesFactory', beachesFactory);
})();
