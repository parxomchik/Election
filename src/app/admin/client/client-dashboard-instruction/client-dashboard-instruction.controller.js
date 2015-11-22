(function() {
    'use strict';

angular
    .module('project')
    .controller('clientInstructionController', clientInstructionController);




/** @ngInject */
function clientInstructionController($stateParams,$location,$log,instructionFactory) {
    var vm = this;
    instructionFactory.getInstractions()
        .success(function (data) {
            vm.instractions = data;
            $log.log(data);

        })
        .error(function (data) {
            $log.log(data);
        });

//        vm.instractions = {
//            territories: [
//                {
//                    presence: {
//                        regionName: 'Деражнянський',
//                        districtNumber: '680020',
//                        address: 'Какой-то адресс',
//                        protocols: [
//                            {
//                                protocolName: 'Загальна кількість бюлетенів Міськрада'
//
//                            },
//                            {
//                                protocolName: 'Загальна кількість бюлетенів Райрада'
//
//                            }
//                        ],
//                        times: [
//                            {time: '8:00'},
//                            {time: '10:00'}
//                        ]
//                    },
//                    bulletin: {
//                        regionName: 'Деражнянський',
//                        districtNumber: '680020',
//                        address: 'Какой-то адресс',
//                        bulletins: [
//                            {
//                                protocolName: 'Облрада',
//                                parties:[
//                                    {
//                                    partiName: 'Рух за реформи'
//                                    },
//                                    {
//                                    partiName: 'За конкретні справи'
//                                    }
//                            ]
//                            },
//                            {
//                                protocolName: 'Райрада',
//                                parties:[
//                                    {
//                                        partiName: 'Рух за реформи2'
//                                    },
//                                    {
//                                        partiName: 'За конкретні справи2'
//                                    }
//                                    ]
//                            }
//                        ]
//                    }
//},
//                {
//                    presence: {
//                        regionName: 'Деражнянський',
//                        districtNumber: '680020',
//                        address: 'Какой-то адресс',
//                        protocols: [
//                            {
//                                protocolName: 'Облрада'
//
//                            },
//                            {
//                                protocolName: 'Райрада'
//
//                            }
//                        ],
//                        times: [
//                            {time: '8:00'},
//                            {time: '10:00'}
//                        ]
//                    },
//                    bulletin: {
//                        regionName: 'Деражнянський',
//                        districtNumber: '680020',
//                        address: 'Какой-то адресс',
//                        bulletins: [
//                            {
//                                protocolName: 'Облрада',
//                                parties:[
//                                    {
//                                        partiName: 'Рух за реформи'
//                                    },
//                                    {
//                                        partiName: 'За конкретні справи'
//                                    }
//                                ]
//                            },
//                            {
//                                protocolName: 'Райрада',
//                                parties:[
//                                    {
//                                        partiName: 'Рух за реформи2'
//                                    },
//                                    {
//                                        partiName: 'За конкретні справи2'
//                                    }
//                                ]
//                            }
//                        ]
//                    }
//                }
//            ]
//        };
}

})();
