(function beachesFactoryIIFE(){

  // Create a beaches factory
  var beachesFactory = function($http, appSettings){
    // beaches is private, only available in this scope

    var factory = {};
    factory.beaches = [];
    factory.beach = {};

    factory.update = function(newComment, category, name){
      var url = appSettings.backendURL + '/beaches/' + name;
      var data = {comment_body: newComment, comment_commentType: category};
      console.log(data);
      return $http.post(url, data).success(function(response){
        factory.getBeaches();
      });

    };
    factory.getBeaches = function(){
      return $http.get(appSettings.backendURL + '/beaches').success(function(response){
        angular.copy(response, factory.beaches);
      });
    };

    factory.getBeach = function(name){
      return  $http.get(appSettings.backendURL + '/beaches/' + name).success(function(response){
        angular.copy(response, factory.beach);
      });
    };

    return factory;
  };

  beachesFactory.$inject = ['$http', 'appSettings'];

  angular.module('beachesApp').factory('beachesFactory', beachesFactory);
})();
