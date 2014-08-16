angular.module('api', ['ngResource']);

angular.module('api').factory('API', function($resource) {
    return {
        People: $resource('http://vegastech-api-demo.azurewebsites.net/api/people/:id')
    };
});
