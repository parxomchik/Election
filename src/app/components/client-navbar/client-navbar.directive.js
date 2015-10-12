(function() {
    'use strict';

    angular
        .module('project')
        .directive('clientNavbar', clientNavbar);


    function clientNavbar() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/client-navbar/client-navbar.html',
        scope: {
            creationDate: '='
        },
        controller: clientNavbarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}
    /** @ngInject */
    function clientNavbarController($scope,$log) {
        //var vm = this;
        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    }
})();