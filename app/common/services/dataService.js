(function(){
    "use strict";

    angular
        .module("common.services")
        .factory("dataService",
             ["$resource",
              "appSettings",
              dataService]);
    
    function dataService($resource, appSettings){
        return $resource(appSettings.dataUrl);
    } 
        
})();

