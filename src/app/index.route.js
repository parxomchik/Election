(function() {
  'use strict';

  angular
    .module('project')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider,$logProvider) {
    $stateProvider
        .state('login', {
        url: '',
        templateUrl: 'app/login/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
        .state('login2', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'loginController',
        controllerAs: 'login'
      })
        .state('dashboard', {
        url: '/client/regions/',
        templateUrl: 'app/admin/client/client-regions/client-regions.html',
        controller: 'clientRegionsController',
        controllerAs: 'region'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('districts', {
        url: '/client/regions/:id',
        templateUrl: 'app/admin/client/client-dashboard-districts/client-dashboard-districts.html',
        controller: 'clientDistrictsController',
        controllerAs: 'districts'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('districtsDetails', {
        url: '/client/regions/:regionId/districts/:id',
        templateUrl: 'app/admin/client/client-districs-details/client-districs-details.html',
        controller: 'clientDistrictsDetailsController',
        controllerAs: 'districtsDetails'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('presence', {
        url: '/client/regions/:regionId/presence/:id',
        templateUrl: 'app/admin/client/client-dashboard-presence/client-dashboard-presence.html',
        controller: 'clientPresenceController',
        controllerAs: 'presence'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('monitoringDashboard', {
        url: '/client/monitoring/',
        templateUrl: 'app/admin/monitoring/monitoring-dashboard/monitoring-dashboard.html',
        controller: 'monitoringDashboardController',
        controllerAs: 'monitoring'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('monitoringRegion', {
        url: '/client/monitoring/region',
        templateUrl: 'app/admin/monitoring/monitoring-region/monitoring-region.html',
        controller: 'monitoringRegionController',
        controllerAs: 'region'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('monitoringCity', {
        url: '/client/monitoring/city',
        templateUrl: 'app/admin/monitoring/monitoring-city/monitoring-city.html',
        controller: 'monitoringCityController',
        controllerAs: 'city'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('monitoringVillage', {
        url: '/client/monitoring/village',
        templateUrl: 'app/admin/monitoring/monitoring-village/monitoring-village.html',
        controller: 'monitoringVillageController',
        controllerAs: 'village'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('monitoringPresence', {
        url: '/client/monitoring/presence',
        templateUrl: 'app/admin/monitoring/monitoring-presence/monitoring-presence.html',
        controller: 'monitoringPresenceController',
        controllerAs: 'presence'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('instruction', {
        url: '/client/instruction/:id',
        templateUrl: 'app/admin/client/client-dashboard-instruction/client-dashboard-instruction.html',
        controller: 'clientInstructionController',
        controllerAs: 'instraction'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //}
      })
        .state('instructionRegion', {
        url: '/client/region_instraction',
        templateUrl: 'app/admin/client/client-region-instruction/client-region-instruction.html',
        controller: 'regionInstructionController',
        controllerAs: 'instraction'
          //resolve: {
          //  user: function(loginFactory) {
          //    return loginFactory.send();
          //  }
          //
          //
      });

    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(false);


  }

})();
