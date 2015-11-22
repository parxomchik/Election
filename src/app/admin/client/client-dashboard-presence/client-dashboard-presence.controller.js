(function() {
    'use strict';

angular
    .module('project')
    .controller('clientPresenceController', clientPresenceController);




/** @ngInject */
function clientPresenceController($stateParams,$log,presenceFactory,sweet,$timeout) {
    var vm = this;
    //vm.presence = {};
    presenceFactory.getPresence()
        .success(function (data) {
            vm.presence = data;
            vm.presence.id = $stateParams.id;
            //$modalInstance.close();
            $log.error(data);
        })
        .error(function (data) {
            $log.log(data);
        });

    vm.savePresence = function(){
        presenceFactory.sendPresence(vm.presence)
            .success(function (data) {
                $log.log(data);
                //$modalInstance.close();
                sweet.show('ДАНІ ЗБЕРЕЖЕНО', 'Натисніть ОК', 'success');
                $timeout( function (){
                    $('.confirm').click();
                    window.location.replace('#/client/regions/'+$stateParams.regionId)
                }, 1000);

                $('.confirm').click(function(){
                    window.location.replace('#/client/regions/'+$stateParams.regionId)
                });
            })
            .error(function (data) {
                $log.log(data);
            });
    }
}


})();
