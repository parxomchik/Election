(function() {
  'use strict';

  angular
    .module('project')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($location,$scope) {
      //var vm = this;
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
  }
})();
