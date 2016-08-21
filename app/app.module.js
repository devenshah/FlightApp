(function(){
    'use strict'

    angular
        .module('app', [
            'flights'
        ])
        .constant("appSettings",         
        {
            dataUrl: "http://ejtestbed.herokuapp.com/flights"
        });
})();