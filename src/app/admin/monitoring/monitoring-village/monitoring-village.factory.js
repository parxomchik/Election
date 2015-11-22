(function() {
    'use strict';

    angular
        .module('project')
        .factory('monitoringVillageFactory', monitoringVillageFactory);

    /** @ngInject */
    function monitoringVillageFactory($cookies,$http,$stateParams,restConfig) {
        return {
            getResoult: function (id) {
                return $http({
                    method: 'GET',
                    //url: 'http://km.ua/api/results/:'+id,
                    url: restConfig.url+'/api/results/village/:'+id,
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            } ,
            getRegion: function () {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/results/village',
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }
        };
    }
})();
