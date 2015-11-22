(function() {
    'use strict';

    angular
        .module('project')
        .factory('monitoringPresenceFactory', monitoringPresenceFactory);

    /** @ngInject */
    function monitoringPresenceFactory($cookies,$http,$stateParams,restConfig) {
        return {
            getResoult: function (id) {
                return $http({
                    method: 'GET',
                    //url: 'http://km.ua/api/results/:'+id,
                    url: restConfig.url+'/api/results/presence/:'+id,
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            } ,
            getRegion: function () {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/api/results/presence',
                    data: $.param({
                        //session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }
        };
    }
})();
