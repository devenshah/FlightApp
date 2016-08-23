(function(){
    angular
        .module('flightApp.core', 
            ['ngResource'])
        .constant("appSettings",         
        {
            dataUrl: "http://ejtestbed.herokuapp.com/flights"
        });
})();