(function() {
    'use strict';

angular
    .module('project')
    .controller('monitoringVillageController', monitoringVillageController);




/** @ngInject */
function monitoringVillageController($location,$log,$scope,monitoringVillageFactory) {
    var vm = this;
    vm.getSelectResoults = function(id){
        $log.log(angular.toJson(id));
        monitoringVillageFactory.getResoult(id)
            .success(function (data) {
                vm.partis  = data.partis;
                vm.resoultsData = data.resoultsData;

                $log.log(data);

            })
            .error(function (data) {
                $log.log(data);
            });
    };

    monitoringVillageFactory.getRegion()
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
