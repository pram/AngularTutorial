var app = angular.module('phoneApp', []);

app.controller("AppCtrl", function ($scope) {
    $scope.sayHi = function () {
        alert("hi");
    };
});