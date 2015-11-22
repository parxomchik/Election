(function() {
    'use strict';

    angular
        .module('project')
        .factory('regionsDashboardFactory', regionsDashboardFactory)
    /** @ngInject */
    function regionsDashboardFactory($cookies,$http,restConfig) {
        return {
            getRegions: function (data) {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/regions',
                    //url: 'http://80.91.174.154:8081/api/regions',
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            getDistricts: function (data) {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/plot/init/:'+data,
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }

        };
    }
})();
