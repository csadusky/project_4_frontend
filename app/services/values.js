// Create applicaton wide settings
angular.module("beachesApp").value('appSettings', {
  title: "Beaches Application",
  version: "1.0",
  backendURL: "https://fast-brook-4146.herokuapp.com"
});

/*
// Use constant if you need app wide values available inside the app config
angular.module("customersApp").constant('appSettings', {
  title: "Customers Application",
  version: "1.0"
});
*/
