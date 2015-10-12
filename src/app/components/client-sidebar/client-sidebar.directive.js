(function() {
    'use strict';

    angular
        .module('project')
        .directive('clientSidebar', clientSidebar);


    function clientSidebar() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/client-sidebar/client-sidebar.html',
        scope: {
            creationDate: '='
        },
        controller: clientSidebarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}
    /** @ngInject */
    function clientSidebarController($location,$scope) {
        var vm = this;
        vm.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
})();