(function() {
    'use strict';

angular
    .module('project')
    .controller('clientQueueControllerEP', clientQueueControllerEP)
    .controller('clientQueueControllerNL', clientQueueControllerNL);

/** @ngInject */
function clientQueueControllerEP() {
    var vm = this
    vm.radioModel = '1';
}
    /** @ngInject */
function clientQueueControllerNL() {
    var vm = this
        vm.radioModel = '2';

}
})();
