(function() {
    'use strict';

    angular
        .module('project')
        .factory('districsDetailsFactory', districsDetailsFactory);
    /** @ngInject */
    function districsDetailsFactory($cookies,$http,$stateParams,restConfig) {
        return {
            getDistricsDetails: function (data) {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/areas/:'+$stateParams.id,
                    //url: 'http://80.91.174.154:8081/api/areas/',
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            saveDistricsDetails: function(data){
                return $http({
                    method: 'POST',
                    url: restConfig.url+'/api/areas/',
                    data: $.param({
                        districtId: $stateParams.id,
                        //session_id: $cookies.getObject('session_id'),
                        data: data
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })

            }
        };
    }
})();
