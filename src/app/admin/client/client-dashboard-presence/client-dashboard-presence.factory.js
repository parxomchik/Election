(function() {
    'use strict';

    angular
        .module('project')
        .factory('presenceFactory', presenceFactory);

    /** @ngInject */
    function presenceFactory($cookies,$http,$stateParams,restConfig) {
        return {
            getPresence: function (data){
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/presence/:'+$stateParams.id,
                    //url: 'http://80.91.174.154:8081/api/districts/:'+$stateParams.id,
                    data: $.param({
                        //data:data

                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            sendPresence: function (data){
                return $http({
                    method: 'POST',
                    url: restConfig.url+'/api/presence/:'+$stateParams.id,
                    //url: 'http://80.91.174.154:8081/api/districts/:'+$stateParams.id,
                    data: $.param({
                        data:data
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }
        };
    }
})();
