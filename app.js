// setup application
angular.module('vegastech', ['ngRoute', 'api', 'people']);

// setup routing
angular.module('vegastech').config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'people/people.html',
            controller: 'PeopleController'
        }).
        when('/people', {
            templateUrl: 'people/people.html',
            controller: 'PeopleController'
        }).
        otherwise({
            redirectTo: '/'
        });
});
