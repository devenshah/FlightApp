(function(){
    "use strict";

    angular
        .module('flightApp.flights')
        .controller('SearchController',
            ['dataService', searchController]);
    
    function searchController(dataService){
        var vm = this;
        vm.title = 'Flight List';
        vm.maxPrice = 100;
        vm.dateFilter = moment().format('DD-MMMM-YYYY');        
 
        vm.search = function (){
            vm.searchResults = [];

            var response = dataService.query();

            response.$promise.then(function(results){
                if(!vm.maxPrice) {
                    vm.searchResults = results;
                }
                else {
                    $.each(results, function(index, item){
                        if (item.prices.adult.value <= vm.maxPrice){
                            vm.searchResults.push(item);
                        }
                    });
                }
            });
        }
    }
})();

        
