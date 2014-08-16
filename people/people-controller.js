angular.module('people', ['api']);

angular.module('people').controller('PeopleController', function($scope, API) {
    $scope.people = API.People.query();
    $scope.individual = API.People.get({ id: 6 });
});