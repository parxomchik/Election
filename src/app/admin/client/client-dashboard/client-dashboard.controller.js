(function() {
    'use strict';

angular
    .module('project')
    .controller('clientDashboardControllerEP', clientDashboardControllerEP)
    .controller('clientDashboardControllerNl', clientDashboardControllerNl);

/** @ngInject */
function clientDashboardControllerEP($log,$scope,$interval,$location,loginFactory,clientDashboardFactoryPlotRepeat) {
    var vm = this;

        loginFactory.sendDashboard()
            .then(function (data) {

            $log.debug(data);
            $log.debug(data.data.info.profile.companies[0].markets);
            $log.debug(data.data.info.alerts);
            $log.debug(data.data.info.plots);
            $log.debug(data.data.info.plots[0]);
            $log.debug(data.data.info.plots[1]);

            vm.markets = data.data.info.profile.companies[0].markets;
            vm.alerts = data.data.info.alerts;

        });


    clientDashboardFactoryPlotRepeat.initPlot(10)
        .then(function (data) {
            $log.debug(data);
            $log.debug('data x график 1'+data.data.x);
            $log.debug('data y график 2'+data.data.y);



            data.data.y = data.data.y.map(function parseDecimalInteger(input) {
                return parseInt(input, 10);
            });
            $log.debug(data.data.y);

            $scope.highchartsNG1 = {
                title: {
                    text: data.data.title
                },
                xAxis: {
                    categories: data.data.x
                },
                yAxis: {
                    title: {
                        text: 'В минутах'
                    },
                    min: 0,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                series: [{
                    type: 'spline',
                    name: 'Время',
                    data:   data.data.y,
                    marker: {
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: '#f6a463'
                    }
                }
                ],
                loading: false
            };

        });
    clientDashboardFactoryPlotRepeat.initPlot(11)
        .then(function (data) {
            $log.debug(data);
            $log.debug('data x график 2'+data.data.x);
            $log.debug('data y график 2'+data.data.y);


            data.data.y = data.data.y.map(function parseDecimalInteger(input) {
                return parseInt(input, 10);
            });
            $log.debug(data.data.y);

            $scope.highchartsNG2 = {
                title: {
                    text: data.data.title
                },
                xAxis: {
                    categories: data.data.x
                },
                yAxis: {
                    title: {
                        text: 'В минутах'
                    },
                    min: 0,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                series: [{
                    type: 'spline',
                    name: 'Время',
                    data:   data.data.y,
                    marker: {
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: '#f6a463'
                    }
                }
                ],
                loading: false
            };
            //
            //
            //
            //$scope.highchartsNG2 = {
            //    title: {
            //        text: vm.plots2.title
            //    },
            //    xAxis: {
            //        categories: vm.plots2.x
            //    },
            //    yAxis: {
            //        title: {
            //            text: 'В минутах'
            //        },
            //        min: 0,
            //        plotLines: [{
            //            value: 0,
            //            width: 1,
            //            color: '#808080'
            //        }]
            //    },
            //    series: [{
            //        type: 'spline',
            //        name: 'Время',
            //        data:   vm.plots2.y,
            //        marker: {
            //            fillColor: '#FFFFFF',
            //            lineWidth: 2,
            //            lineColor: '#f6a463'
            //        }
            //    }
            //    ],
            //    loading: false
            //};


            //$scope.highchartsNG1.xAxis.categories.push(data.data.x);
            //
            //data.data.y = data.data.y.map(function parseDecimalInteger(input) {
            //    return parseInt(input, 10);
            //});
            //$scope.highchartsNG1.series[0].data.push(data.data.y);

        });
    $interval(function addPoint(){
        clientDashboardFactoryPlotRepeat.getPlot(10)
            .then(function (data) {
                        $log.debug(data);
                        $log.debug('getPlot data x график 1 = '+data.data.x);
                        $log.debug('getPlot data y график 1 = '+data.data.y);
                       $scope.highchartsNG1.xAxis.categories.push(data.data.x);

                data.data.y = data.data.y.map(function parseDecimalInteger(input) {
                    return parseInt(input, 10);
                });
                        $scope.highchartsNG1.series[0].data.push(data.data.y);

            });
        clientDashboardFactoryPlotRepeat.getPlot(11)
            .then(function (data) {
                        $log.debug(data);
                        $log.debug('getPlot data x график 2 = '+data.data.x);
                        $log.debug('getPlot data y график 2 = '+data.data.y);

                        $scope.highchartsNG2.xAxis.categories.push(data.data.x);

                data.data.y = data.data.y.map(function parseDecimalInteger(input) {
                    return parseInt(input, 10);
                });
                        $scope.highchartsNG2.series[0].data.push(data.data.y);

            });
    },10000);

        vm.radioModel = 'ep';

        vm.notifications = {
            id: 1
        };


    $interval(function deletePoint(){


             //console.log('Random Point: ' + randomPoint, $scope.chartOptions);

             //$scope.highchartsNG1.series[0].data.shift(0);
             //$scope.highchartsNG1.xAxis.categories.shift(0);
             //$scope.highchartsNG2.series[0].data.shift(0);
             //$scope.highchartsNG2.xAxis.categories.shift(0);

    },12000);


        vm.notificationDetails = function (id) {
            $location.path("/client/notifications/{{}}/datails/" + id);
        };



        $scope.sortType = 'creationDate';                                       // set the default sort type
        $scope.sortReverse = false;                                                // set the default sort order


        $log.log(vm.radioModel);

}



    /** @ngInject */
function clientDashboardControllerNl($log,$scope,$timeout) {
    var vm = this;
        $scope.splineChartSettings =  {
            markerLineColor:'#f6a463',                              // set marker dots color
            chartName:'Pages per visits',                           // set chart name
            charType:'spline',                                      // set chart type
            charTitle : 'User Visits',                              // set chart title
            chartData : [5, 30, 10, 34, 0],                         //set chart data
            xAxis : ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan']   // set chart X axis
        };
        $scope.highchartsNG2 = {
            title: {
                text: $scope.splineChartSettings.charTitle
            },
            xAxis: {
                categories: $scope.splineChartSettings.xAxis
            },
            series: [{
                type: $scope.splineChartSettings.charType,
                name: $scope.splineChartSettings.chartName,
                data: $scope.splineChartSettings.chartData,
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: $scope.splineChartSettings.markerLineColor
                }
            }],
            loading: false
        };

        $scope.highchartsNG1 = {
            useHighStocks: false,
            options: {
                chart: {
                    type: 'spline',
                    zoomType: 'x'
                }
            },
            series: [{
                data: [10, 15, 12, 8, 7],
                marker: {
                    enabled: false
                }
            }],
            title: {
                text: 'First Chart'
            },

            //xAxis: {currentMin: 0, currentMax: 10, minRange: 1},
            loading: false
        };

        function addPoint() {
            var randomPoint = Math.floor((Math.random()*12)+1) + 8;
            //console.log('Random Point: ' + randomPoint, $scope.highchartsNG1);
            $scope.highchartsNG1.series[0].data.push(randomPoint);


            $timeout(addPoint, 10000);
        }
        addPoint();

        vm.radioModel = 'nl';
    $log.log(vm.radioModel);
}
})();
