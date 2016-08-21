(function(){
    "use strict";

    angular
        .module('flightApp.flights')
        .controller('SearchController',
            ['dataService', searchController]);
    
    function searchController(dataService){
        var vm = this;
        vm.title = 'Flight List';
         
        dataService.query(function (data) {
            vm.searchResults = data;
        });
    }

})();

        
