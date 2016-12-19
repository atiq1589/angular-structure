(function () {
    'use strict';
    angular
        .module('seedApp')
        .controller('LayoutController', LayoutController);

    function LayoutController() {
        var vm = this;
        
        vm.footerUrl = 'app/layout/partials/footer.html';
        vm.headerUrl = 'app/layout/partials/header.html';
    }
})();