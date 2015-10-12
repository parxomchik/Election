(function() {
    'use strict';

    angular
        .module('project')
        .factory('loginFactory', loginFactory);

    /** @ngInject */
    function loginFactory($http,$cookies){
        return {
            sendLogin: function (data) {
                return $http({
                    method: 'POST',
                    url: 'http://wall.epicentr.com:8081/api/login',
                    data: $.param({
                        email:  data.email,
                        password:  data.password,
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
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
})();
