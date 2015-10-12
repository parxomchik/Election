(function() {
  'use strict';

  angular
    .module('project')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
        .state('dashboardEP', {
        url: '/client/dashboard/ep',
        templateUrl: 'app/admin/client/client-dashboard/client-dashboard.html',
        controller: 'clientDashboardControllerEP',
        controllerAs: 'dashboard',
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('dashboardNL', {
        url: '/client/dashboard/nl',
        templateUrl: 'app/admin/client/client-dashboard/client-dashboard.html',
        controller: 'clientDashboardControllerNl',
        controllerAs: 'dashboard'
      })

      .state('replicationEP', {
        url: '/client/replication/ep',
        templateUrl: 'app/admin/client/client-replication/client-replication.html',
        controller: 'clientReplicationControllerEP',
        controllerAs: 'replication'
      })
        .state('replicationNL', {
        url: '/client/replication/nl',
        templateUrl: 'app/admin/client/client-replication/client-replication.html',
        controller: 'clientReplicationControllerNL',
        controllerAs: 'replication'
      })
        .state('queueEP', {
          url: '/client/queue/ep',
          templateUrl: 'app/admin/client/client-queue/client-queue.html',
          controller: 'clientQueueControllerEP',
          controllerAs: 'queue'
      })
        .state('queueNL', {
          url: '/client/queue/nl',
          templateUrl: 'app/admin/client/client-queue/client-queue.html',
          controller: 'clientQueueControllerNL',
          controllerAs: 'queue'
      })


        .state('otrsEP', {
          url: '/client/otrs/ep',
          templateUrl: 'app/admin/client/client-otrs/client-otrs.html',
          controller: 'clientOtrsControllerEP',
          controllerAs: 'otrs'
      })
        .state('otrsNL', {
          url: '/client/otrs/nl',
          templateUrl: 'app/admin/client/client-otrs/client-otrs.html',
          controller: 'clientOtrsControllerNL',
          controllerAs: 'otrs'
      })


        .state('notificationsEP', {
          url: '/client/notifications/ep',
          templateUrl: 'app/admin/client/client-notifications/client-notifications.html',
          controller: 'clientNotificationsControllerEP',
          controllerAs: 'notifications'

      })
      .state('notificationsNL', {
          url: '/client/notifications/nl',
          templateUrl: 'app/admin/client/client-notifications/client-notifications.html',
          controller: 'clientNotificationsControllerNL',
          controllerAs: 'notifications'
      });
    //  .state('brandbook', {
    //  url: '/brandbook',
    //  templateUrl: 'app/brandbook/brandbook.html',
    //  controller: 'brandbookController',
    //  controllerAs: 'brandbook'
    //})

    $urlRouterProvider.otherwise('/');
  }

})();
