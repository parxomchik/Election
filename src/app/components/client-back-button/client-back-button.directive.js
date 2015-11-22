(function() {
    'use strict';

    angular
        .module('project')
        .directive('clientBackBtn', clientBackBtn);




 function clientBackBtn() {
     return {
         restrict: 'E',
         template: '<button type="button" class="btn btn-default" aria-label="Left Align">'+
         '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
         'Назад</button>',
         //scope: {
         //    back: '@back',
         //    forward: '@forward',
         //    icons: '@icons'
         //},
         link: function (scope, element, attrs) {
             $(element[0]).on('click', function () {
                 history.back();
                 scope.$apply();
             });
         }
     };
 }
})();
