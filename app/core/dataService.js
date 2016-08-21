(function(){
    "use strict";

    angular
        .module("flightApp.core")
        .factory("dataService",
             ["$resource",
              "appSettings",
              dataService]);
    
    function dataService($resource, appSettings){
        return $resource(appSettings.dataUrl);
    } 
        
})();

