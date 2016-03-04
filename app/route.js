(function () {
    'use strict';
    angular
        .module('MainApp')
        .config(function ($stateProvider, $urlRouterProvider, DIR) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/");
            //
            // Now set up the states
            $stateProvider
                .state('landing', {
                    url: "/",
                    templateUrl: DIR + "layout/layout.html",
                    controller: 'LayoutController',
                    controllerAs: 'vm'
                });
        });
})();