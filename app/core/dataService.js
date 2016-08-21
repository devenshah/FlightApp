(function(){
    "use strict";

    angular
        .module("core")
        .factory("dataService",
             ["$resource",
              "appSettings",
              dataService]);
    
    function dataService($resource, appSettings){
        return $resource(appSettings.dataUrl);
    } 
        
})();

