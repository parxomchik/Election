(function() {
    'use strict';

    angular
        .module('project')
        .factory('instructionFactory', instructionFactory);

    /** @ngInject */
    function instructionFactory($cookies,$http,$stateParams,restConfig) {
        return {
            getInstractions: function () {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/instractions/'+$stateParams.id,
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
