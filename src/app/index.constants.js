(function() {
  'use strict';

  angular
    .module('project')
    //.constant('baseUrl', baseUrlConstant)
     .constant("restConfig", {
        //"url": "http://local.ua"
        //"url": "http://80.91.174.154:8081"
        "url": "http://vybory.epicentr.net.ua"
        //"port": "8081"
      })
        .constant("loginConfig", {
        "url": "http://crm.epicentr.com/api/login/",
        "port": "8081"
      });
})();
