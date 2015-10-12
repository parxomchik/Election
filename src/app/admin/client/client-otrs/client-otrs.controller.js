(function() {
    'use strict';

angular
    .module('project')
    .controller('clientOtrsControllerEP', clientOtrsControllerEP)
    .controller('clientOtrsControllerNL', clientOtrsControllerNL);

/** @ngInject */
function clientOtrsControllerEP() {
    var vm = this
    vm.radioModel = '1';

}
    /** @ngInject */
function clientOtrsControllerNL() {
    var vm = this
        vm.radioModel = '2';

}
})();
