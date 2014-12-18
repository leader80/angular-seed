'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'geoServices',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);

app.controller('MainCtrl', ['$scope', 'Zip', function($scope, Zip) {

    $scope.zips = Zip.get({searchText: '69'});
    $scope.greeting = 'Hola!';

    /*Post.get({ id: 1 }, function(data) {
        $scope.post = data;
    });*/

}]);