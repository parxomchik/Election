(function() {
    'use strict';

angular
    .module('project')
    .controller('clientDistrictsDetailsController', clientDistrictsDetailsController)

/** @ngInject */
function clientDistrictsDetailsController($location,$scope,$stateParams,$log,districsDetailsFactory,$timeout,sweet) {
    var vm = this;


    //vm.areas = [
    //        {
    //            name: 'Района рада',
    //            id:1,
    //            partis:[
    //                {partiName: 'партия 1',
    //                    partiResoults:123
    //                },
    //                {partiName: 'партия 2',
    //                    partiResoults:123
    //
    //                },
    //                {partiName: 'партия 3',
    //                    partiResoults:31
    //
    //                },
    //                {partiName: 'партия 4',
    //                    partiResoults:222
    //                }
    //
    //            ]
    //        },
    //        {
    //            name: 'Обласна рада',
    //            id:2,
    //            partis:[
    //                {partiName: 'партия 1',
    //                    partiResoults:123
    //                },
    //                {partiName: 'партия 2',
    //                    partiResoults:123
    //
    //                },
    //                {partiName: 'партия 3',
    //                    partiResoults:31
    //
    //                },
    //                {partiName: 'партия 4',
    //                    partiResoults:222
    //                }
    //
    //            ]
    //        },
    //        {
    //            name: 'Сільський голова',
    //            id:3,
    //            partis:[
    //                {partiName: 'партия 1',
    //                    partiResoults:123
    //                },
    //                {partiName: 'партия 2',
    //                    partiResoults:123
    //
    //                },
    //                {partiName: 'партия 3',
    //                    partiResoults:31
    //
    //                },
    //                {partiName: 'партия 4',
    //                    partiResoults:222
    //                }
    //
    //            ]
    //        },
    //        {
    //            name: 'Сільська рада',
    //            id:3,
    //            partis:[
    //                {partiName: 'партия 1',
    //                    partiResoults:123
    //                },
    //                {partiName: 'партия 2',
    //                    partiResoults:123
    //
    //                },
    //                {partiName: 'партия 3',
    //                    partiResoults:31
    //
    //                },
    //                {partiName: 'партия 4',
    //                    partiResoults:222
    //                }
    //
    //            ]
    //        }
    //    ];
    districsDetailsFactory.getDistricsDetails()
        .success(function (data) {
            vm.areas = data;
            vm.areas.districtId = $stateParams.id;

            $log.debug('data districsDetailsFactory = '+angular.toJson(data));
        })
        .error(function (data) {
            $log.log(data);
        });



    vm.saveDistrict2 = function() {
        //$log.debug('vm.saveDistrict2 data = '+angular.toJson(vm.areas));
        districsDetailsFactory.saveDistricsDetails(vm.areas)
            .success(function (data) {


                sweet.show('ДАНІ ЗБЕРЕЖЕНО', 'Натисніть ENTER', 'success');
                $timeout( function (){
                    $('.confirm').click();
                    window.location.replace('#/client/regions/'+$stateParams.regionId)
                }, 1000);

                $('.confirm').click(function(){
                    window.location.replace('#/client/regions/'+$stateParams.regionId)
                });


            })
            .error(function (data) {
                $log.log(data);
            });

    };
}
})();
