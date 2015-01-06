var myApp = angular.module('myApp', []);

myApp.factory('Data', function () {
    return { message: "I'm data from a service" }
});

myApp.filter('reverse', function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
});

myApp.filter('reverse2', function (Data) {
    return function (text) {
        return text.split("").reverse().join("") + Data.message;
    }
});

function FirstCtrl($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl($scope, Data) {
    $scope.data = Data;
}

function ThirdCtrl($scope, Data) {
    $scope.data = Data;
}