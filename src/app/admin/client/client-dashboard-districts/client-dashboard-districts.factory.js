(function() {
    'use strict';

    angular
        .module('project')
        .factory('districtsFactory', districtsFactory);

    /** @ngInject */
    function districtsFactory($cookies,$http,$stateParams,restConfig) {
        return {
            getDistricts: function () {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/districts/:'+$stateParams.id,
                    //url: 'http://80.91.174.154:8081/api/districts/:'+$stateParams.id,
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            getPresence: function (data){
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/presence/:'+data,
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
                    url: restConfig.url+'/api/presence/:'+data.districtId,
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
