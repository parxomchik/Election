(function() {
    'use strict';

angular
    .module('project')
    .controller('clientRegionsController', clientRegionsController);

/** @ngInject */
function clientRegionsController($location,$log,regionsDashboardFactory) {
    var vm = this;
    //vm.regions = [
    //    {
    //        id:1,
    //        regionName:"Білогірський р-н",
    //        allDistricts: 59,
    //        smallDistricts : 49,
    //        middleDistricts: 9,
    //        bigDistricts:1,
    //        countOfPeople:21622
    //    },
    //    {
    //        id:2,
    //        regionName:"Віньковецький р-н",
    //        allDistricts: 59,
    //        smallDistricts : 49,
    //        middleDistricts: 9,
    //        bigDistricts:1,
    //        countOfPeople:21622        },
    //    {
    //        id:3,
    //        regionName:"Волочиський  р-н",
    //        allDistricts: 59,
    //        smallDistricts : 49,
    //        middleDistricts: 9,
    //        bigDistricts:1,
    //        countOfPeople:21622
    //    },
    //    {
    //        id:4,
    //        regionName:"Городоцький  р-н",
    //        allDistricts: 59,
    //        smallDistricts : 49,
    //        middleDistricts: 9,
    //        bigDistricts:1,
    //        countOfPeople:21622
    //    }
    //
    //];
    regionsDashboardFactory.getRegions()
        .success(function (data) {
            vm.regions = data;


            $log.debug('data regionsDashboardFactory = '+angular.toJson(data));
        })
        .error(function (data) {
            $log.log(data);
        });


    //vm.getDistrict = function (id) {
    //    $log.error(id);
    //    $location.path("/client/dashboard/districts/"+id);
    //};


    //$scope.clientDetails = function (id) {
    //    console.log(id);
    //    $location.path("/clientsDetails/"+id);
    //};

    vm.getDistrict = function(id) {
        $log.debug('getDistrict id'+id);
        $location.path("/client/regions/"+id);
    }
}
})();
