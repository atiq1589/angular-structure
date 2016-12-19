(function () {
    'use strict';

    angular
        .module('seedApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('home.landing', {
                    url: "",
                    templateUrl: "app/landing/landing.html",
                    controller: 'LandingController',
                    controllerAs: 'landCtrl'
                })
        });
})();