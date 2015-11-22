(function() {
    'use strict';

angular
    .module('project')
    .controller('monitoringPresenceController', monitoringPresenceController);




/** @ngInject */
function monitoringPresenceController($location,$log,$scope,monitoringPresenceFactory) {
    var vm = this;
    vm.getSelectResoults = function(id){
        $log.log(angular.toJson(id));
        monitoringPresenceFactory.getResoult(id)
            .success(function (data) {
                vm.partis  = data.partis;
                vm.resoultsData = data.resoultsData;

                $log.log(data);

            })
            .error(function (data) {
                $log.log(data);
            });
    };

    monitoringPresenceFactory.getRegion()
        .success(function (data) {
            $scope.regionSelect = data;
            vm.getSelectResoults(data.selectedOption.id);
            $log.log(data);
        })
        .error(function (data) {
            $log.log(data);
        });
    }
})();
