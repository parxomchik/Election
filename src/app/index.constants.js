(function() {
  'use strict';

  angular
    .module('project')
    //.constant('baseUrl', baseUrlConstant)
     .constant("restConfig", {
        "url": "http://crm.epicentr.com:8081/api/hello/5",
        "port": "8081"
      })
        .constant("loginConfig", {
        "url": "http://crm.epicentr.com/api/login/",
        "port": "8081"
      });
})();
