(function(){
    "use strict";

    angular
        .module('flightApp.flights')
        .controller('SearchController',
            ['dataService', searchController]);
    
    function searchController(dataService){
        var vm = this;
        vm.title = 'Flight List';

        vm.dateFilter = moment().format('DD-MMMM-YYYY');        
 
        vm.searchResults = dataService.query();

        vm.search = function (){
            vm.searchResults = dataService.query();
        }
    }

})();

        
