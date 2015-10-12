(function() {
    'use strict';

angular
    .module('project')
    .controller('clientNotificationsControllerEP', clientNotificationsControllerEP)
    .controller('clientNotificationsControllerNL', clientNotificationsControllerNL);

/** @ngInject */
function clientNotificationsControllerEP() {
    var vm = this
    vm.radioModel = '1';


}
    /** @ngInject */
function clientNotificationsControllerNL() {
    var vm = this

        vm.radioModel = '2';

}
})();
