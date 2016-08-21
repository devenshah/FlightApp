(function(){
    angular
        .module("flightApp.flights")
        .directive('searchResults', searchResults);

    function searchResults(){
        return {
            restrict: 'E',
            templateUrl: 'app/flights/searchResults.html'
        };
    }
})();