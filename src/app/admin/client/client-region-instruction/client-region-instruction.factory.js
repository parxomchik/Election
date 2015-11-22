(function() {
    'use strict';

    angular
        .module('project')
        .factory('regionInstructionFactory', regionInstructionFactory);

    /** @ngInject */
    function regionInstructionFactory($cookies,$http,$stateParams,restConfig) {
        return {
            getRegions: function () {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/instractions/regions',
                    //url: 'http://80.91.174.154:8081/api/districts/:'+$stateParams.id,
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }
        };
    }
})();
