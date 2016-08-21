(function(){
    "use strict";

    angular
        .module('app')
        .controller('flightsController', ['dataService', flightsController]);
    
    function flightsController(dataService){
        var vm = this;
        vm.title = 'Flight List';
         
        dataService.query(function (data) {
            vm.searchResults = data;
        });
    }

})();

        
