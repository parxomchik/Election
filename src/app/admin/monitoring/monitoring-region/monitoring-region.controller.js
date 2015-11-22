(function() {
    'use strict';

angular
    .module('project')
    .controller('monitoringRegionController', monitoringRegionController);




/** @ngInject */
function monitoringRegionController($location,$log,$scope,monitoringRegionFactory) {
    var vm = this;
    vm.getSelectResoults = function(id){
        $log.log(angular.toJson(id));
        monitoringRegionFactory.getResoult(id)
            .success(function (data) {
                vm.partis  = data.partis;
                vm.resoultsData = data.resoultsData;

                $log.log(data);

            })
            .error(function (data) {
                $log.log(data);
            });
    };

    monitoringRegionFactory.getRegion()
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
