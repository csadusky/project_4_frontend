(function beachesControllerIIFE(){

  var BeachesController = function(beachesFactory, appSettings){
    this.sortBy = "name";
    this.reverse = false;
    this.beaches =  beachesFactory.beaches;
    this.beach = beachesFactory.beach;
    this.appSettings = appSettings;

    function init(){
      // Init the beaches from the factory
      //this.beaches = beachesFactory.getCustomers();
      beachesFactory.getBeaches();
    }
    //this is populating beaches array
    init();

    this.doSort = function(name){
      this.sortBy = name;
      this.reverse = !this.reverse;
    };

  };

 BeachesController.$inject = ['beachesFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('beachesApp').controller('beachesController', BeachesController);

})();
