(function beachesControllerIIFE(){

  var BeachesController = function(beachesFactory, appSettings, $location){
    var self = this;
    this.sortBy = "name";
    this.reverse = false;
    this.beaches =  beachesFactory.beaches;
    this.beach = beachesFactory.beach;
    this.appSettings = appSettings;
    this.selectedBeach = this.beaches[0];
    this.newComment = "";
    this.update = function(){
      beachesFactory.update(this.newComment, this.catagory, this.selectedBeach.name);
    }
    function init(){
      // Init the beaches from the factory
      //this.beaches = beachesFactory.getBeaches();
      beachesFactory.getBeaches();
    }
    //this is populating beaches array
    init();

    this.doSort = function(name){
      self.sortBy = name;
      self.reverse = !self.reverse;
    };

  };

 BeachesController.$inject = ['beachesFactory', 'appSettings', '$location'];

 // The Controller is part of the module.
 angular.module('beachesApp').controller('beachesController', BeachesController);

})();
