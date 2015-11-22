(function() {
    'use strict';

    angular
        .module('project')
        .factory('loginFactory', loginFactory);

    /** @ngInject */
    function loginFactory($http,$cookies,restConfig){
        return {
            sendLogin: function (data) {
                return $http({
                    method: 'POST',
                    url: restConfig.url+'/api/login',
                    //url: 'http://80.91.174.154:8081/api/login',
                    data: $.param({
                        username:  data.username,
                        password:  data.password
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })


            }
        };
    }
})();
