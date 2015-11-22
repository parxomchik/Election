(function() {
    'use strict';

angular
    .module('project')
    .controller('regionInstructionController', regionInstructionController);




/** @ngInject */
function regionInstructionController($stateParams,$location,$log,regionInstructionFactory) {
    var vm = this;
    //vm.regions = [
    //        {
    //            id:1,
    //            regionName: 'Район1',
    //            regionUrl: 'www.google.com'
    //        },
    //        {
    //            id:2,
    //            regionName: 'Район2',
    //            regionUrl: 'www.google.com'
    //        },
    //        {
    //            id:3,
    //            regionName: 'Район3',
    //            regionUrl: 'www.google.com'
    //        }
    //
    //];

    regionInstructionFactory.getRegions()
        .success(function (data) {
            vm.regions = data;
            $log.log(data);

        })
        .error(function (data) {
            $log.log(data);
        });

}

})();
