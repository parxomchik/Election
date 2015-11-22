(function() {
    'use strict';

angular
    .module('project')
    .controller('clientDistrictsController', clientDistrictsController);




/** @ngInject */
function clientDistrictsController($stateParams,$location,$log,districtsFactory) {
    var vm = this;
    districtsFactory.getDistricts()
        .success(function (data) {

            $log.log(data);
            vm.districts = data;

            $log.debug('data regionsDashboardFactory = '+angular.toJson(data));
        })
        .error(function (data) {
            $log.log(data);
        });
    vm.getPresence = function (id){
        $location.path("/client/regions/"+$stateParams.id+"/presence/"+id);
    };
    vm.getArea = function(id) {
        $log.debug('getDistrict id'+id);
        $location.path("/client/regions/"+$stateParams.id+"/districts/"+id);
    };
}



})();
