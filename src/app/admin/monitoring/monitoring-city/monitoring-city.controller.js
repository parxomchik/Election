(function() {
    'use strict';

angular
    .module('project')
    .controller('monitoringCityController', monitoringCityController);




/** @ngInject */
function monitoringCityController($location,$log,$scope,monitoringCityFactory) {
    var vm = this;
    vm.getSelectResoults = function(id){
        $log.log(angular.toJson(id));
        monitoringCityFactory.getResoult(id)
            .success(function (data) {
                vm.partis  = data.partis;
                vm.resoultsData = data.resoultsData;

                $log.log(data);

            })
            .error(function (data) {
                $log.log(data);
            });
    };

    monitoringCityFactory.getRegion()
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
