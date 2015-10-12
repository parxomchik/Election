(function() {
  'use strict';

  angular
    .module('project')
    .controller('loginController', loginController);

  /** @ngInject */
  function loginController(loginFactory,$log,$location,$rootScope,$cookies) {
    var vm = this;

    //vm.port = restConfig.port;
    //vm.url = restConfig.url;
    //vm.full = restConfig.url +':'+ restConfig.port;
    //
    ////vm.test = mainFactory.get();
    //$log.debug(vm.test);
    ////$scope.submit=function(){
    ////  alert(angular.toJson($scope.LovelyForm));
    ////};
    //$scope.modal = {
    //  "title": "Title2",
    //  "content": ""
    //};
    //var myModal = $modal({
    //  controller: MainController,
    //  templateUrl: 'modal-login.html',
    //  show: false
    //});
    vm.loginSubmit = function(){
      var data = {
        email:  vm.email,
        password:  vm.password
      };
      $log.debug(data);
      loginFactory.sendLogin(data)
          .then(function(data) {
            //vm.markets = data;
            //$log.log(data.data.session_id);
            //$log.log(data.data.AnswerStatus);
            if(data.data.answer_status == '1'){
              //$log.debug(data.data.info.companies[0].markets);
              //$log.debug(data.data.info.companies[1].markets);
              //$rootScope.markets = data.data.info.companies[0].markets;
              //$rootScope.userData = {email: vm.email, password: vm.password};
              //$cookies.put('session_id', '10000');
              $cookies.put('session_id',data.data.session_id);
              $location.path("/client/dashboard/ep");
            }
          });
    };
  }
})();
