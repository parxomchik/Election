(function() {
    'use strict';

angular
    .module('project')
    .controller('clientReplicationControllerEP', clientReplicationControllerEP)
    .controller('clientReplicationControllerNL', clientReplicationControllerNL);

/** @ngInject */
function clientReplicationControllerEP() {
    var vm = this;
    vm.radioModel = '1';

}
    /** @ngInject */
function clientReplicationControllerNL() {
    var vm = this;
        vm.radioModel = '2';

}
})();
