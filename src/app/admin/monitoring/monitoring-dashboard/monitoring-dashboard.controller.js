(function() {
    'use strict';

angular
    .module('project')
    .controller('monitoringDashboardController', monitoringDashboardController);




/** @ngInject */
function monitoringDashboardController($location,$log,$scope,monitoringFactory) {
    var vm = this;

    //vm.regionSelect = [
    //
    //    {
    //        id: 1,
    //        name: 'Облрада'
    //    },
    //    {
    //        id: 2,
    //        name: 'Облрада60'
    //    },
    //    {
    //        id: 3,
    //        name: 'Облрада61'
    //    },
    //    {
    //        id: 4,
    //        name: 'Облрада62'
    //    },
    //    {
    //        id: 5,
    //        name: 'Райрада'
    //    },
    //    {
    //        id: 6,
    //        name: 'Райрада Городок'
    //    },
    //    {
    //        id: 7,
    //        name: 'Міська рада '
    //    },
    //    {
    //        id: 8,
    //        name: 'Міський голова  '
    //    },
    //    {
    //        id: 9,
    //        name: 'Селищна Сатанів  '
    //    }
    //];
    //$scope.regionSelect = {
    //    availableOptions: [
    //        {
    //            id: 1,
    //            title: 'Облрада'
    //        },
    //        {
    //            id: 2,
    //            title: 'Облрада60'
    //        },
    //        {
    //            id: 3,
    //            title: 'Облрада61'
    //        },
    //        {
    //            id: 4,
    //            title: 'Облрада62'
    //        },
    //        {
    //            id: 5,
    //            title: 'Райрада'
    //        },
    //        {
    //            id: 6,
    //            title: 'Райрада Городок'
    //        },
    //        {
    //            id: 7,
    //            title: 'Міська рада '
    //        },
    //        {
    //            id: 8,
    //            title: 'Міський голова  '
    //        },
    //        {
    //            id: 9,
    //            title: 'Селищна Сатанів  '
    //        }
    //    ],
    //    selectedOption: {id: '1'} //This sets the default value of the select in the ui
    //};
    //vm.partis = [
    //    {
    //        partiName :'Партія 1',
    //        quantityOfparticipans: 'осіб',
    //        percentage : "%"
    //    },
    //    {
    //        partiName:'Партія 2',
    //        quantityOfparticipans: 'осіб',
    //        percentage : "%"
    //
    //    }  ,
    //    {
    //        partiName :'Партія 3',
    //        quantityOfparticipans: 'осіб',
    //        percentage : "%"
    //    },
    //    {
    //        partiName:'Партія 4',
    //        quantityOfparticipans: 'осіб',
    //        percentage : "%"
    //    }
    //];
    //
    //vm.resoultsData = [
    //    {
    //        districtId: 680196,
    //        cityName: 'смт Сатанів',
    //        districtCountOfPeople: 1706,
    //        participants:300,
    //        partiResoults :[
    //            {
    //                percentage: '40%',
    //                quantityOfparticipans: 10
    //            },
    //            {
    //                percentage: '20%',
    //                quantityOfparticipans: 60
    //            }   ,
    //            {
    //                percentage: '40%',
    //                quantityOfparticipans: 10
    //            },
    //            {
    //                percentage: '20%',
    //                quantityOfparticipans: 60
    //            }
    //        ]
    //    },
    //    {
    //        districtId: 680197,
    //        cityName: 'смт Сатанів',
    //        districtCountOfPeople: 1702,
    //        participants:'320',
    //        partiResoults :[
    //            {
    //                percentage: '40%',
    //                quantityOfparticipans: 10
    //            },
    //            {
    //                percentage: '20%',
    //                quantityOfparticipans: 60
    //            }   ,
    //            {
    //                percentage: '40%',
    //                quantityOfparticipans: 10
    //            },
    //            {
    //                percentage: '20%',
    //                quantityOfparticipans: 60
    //            }
    //        ]
    //    }   ,
    //    {
    //        districtId: 680196,
    //        cityName: 'смт Сатанів',
    //        districtCountOfPeople: 1706,
    //        participants:300,
    //        partiResoults :[
    //            {
    //                percentage: '40%',
    //                quantityOfparticipans: 10
    //            },
    //            {
    //                percentage: '20%',
    //                quantityOfparticipans: 60
    //            }   ,
    //            {
    //                percentage: '40%',
    //                quantityOfparticipans: 10
    //            },
    //            {
    //                percentage: '20%',
    //                quantityOfparticipans: 60
    //            }
    //        ]
    //    },
    //    {
    //        districtId: 680197,
    //        cityName: 'смт Сатанів',
    //        districtCountOfPeople: 1702,
    //        participants:'320',
    //        partiResoults :[
    //            {
    //                percentage: '40%',
    //                quantityOfparticipans: 10
    //            },
    //            {
    //                percentage: '20%',
    //                quantityOfparticipans: 60
    //            }   ,
    //            {
    //                percentage: '40%',
    //                quantityOfparticipans: 10
    //            },
    //            {
    //                percentage: '20%',
    //                quantityOfparticipans: 60
    //            }
    //        ]
    //    }
    //];
    //vm.districts = [
    //    {
    //        districtID:221,
    //        cityName:"Білогірський р-н",
    //        address: 59,
    //        contactPerson : 49,
    //        phoneNumber: 9
    //    },
    //    {
    //        districtID:222,
    //        cityName:"Білогірський р-н",
    //        address: 59,
    //        contactPerson : 49,
    //        phoneNumber: 9
    //    },
    //    {
    //        districtID:402,
    //        cityName:"Білогірський р-н",
    //        address: 59,
    //        contactPerson : 49,
    //        phoneNumber: 9
    //    },
    //    {
    //        districtID:424,
    //        cityName:"Білогірський р-н",
    //        address: 59,
    //        contactPerson : 49,
    //        phoneNumber: 9
    //    }];

    vm.getSelectResoults = function(id){
        $log.log(angular.toJson(id));
        monitoringFactory.getResoult(id)
            .success(function (data) {
                vm.partis  = data.partis;
                vm.resoultsData = data.resoultsData;

                $log.log(data);

            })
            .error(function (data) {
                $log.log(data);
            });
    };

        monitoringFactory.getRegion()
        .success(function (data) {
                $scope.regionSelect = data;
                vm.getSelectResoults(data.selectedOption.id);
            $log.log(data);
        })
        .error(function (data) {
            $log.log(data);
        });
}
})();
