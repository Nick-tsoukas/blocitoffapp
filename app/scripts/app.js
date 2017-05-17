(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/scripts/templates/home.html'
            });
    }

    angular
        .module('taskApp', ['ui.router', 'firebase'])
        .config(config);
})();
