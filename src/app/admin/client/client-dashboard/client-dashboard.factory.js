(function() {
    'use strict';

    angular
        .module('project')
        .factory('clientDashboardFactory', clientDashboardFactory)
        .factory('clientDashboardFactoryPlotRepeat', clientDashboardFactoryPlotRepeat);

    /** @ngInject */
    function clientDashboardFactory($http,$cookies){
        return {
            sendDashboard: function (data) {
                return $http({
                    method: 'POST',
                    url: 'http://wall.epicentr.com:8081/api/dashboard',
                    data: $.param({
                        session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }

        };
    }
    /** @ngInject */
    function clientDashboardFactoryPlotRepeat($cookies,$http) {
        return {
            getPlot: function (data) {
                return $http({
                    method: 'GET',
                    url: 'http://wall.epicentr.com:8081/api/plot/repeat/:'+data,
                    data: $.param({
                        session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            initPlot: function (data) {
                return $http({
                    method: 'GET',
                    url: 'http://wall.epicentr.com:8081/api/plot/init/:'+data,
                    data: $.param({
                        session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }

        };
        //return $resource('http://wall.epicentr.com:8081/api/plot/repeat/:10', {id: '@id'}, {
        //    send: {
        //        method: 'POST',
        //        data: $.param({
        //            session_id: $cookies.getObject('session_id')
        //        }),
        //        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        //    }
        //});



    }
})();
