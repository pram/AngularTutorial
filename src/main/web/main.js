var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function () {
    var Avengers = {};
    Avengers.cast = [
        {
            name: 'Tony Stark',
            character: 'Iron Man'
        }, {
            name: 'Bruce Banner',
            character: 'The Incredible Hulk'
        }, {
            name: 'Nick Fury',
            character: 'Nick Fury'
        }, {
            name: 'Billy Jo',
            character: 'Hawkeye'
        }, {
            name: 'Steve Rogers',
            character: 'Captain America'
        }, {
            name: 'Thor',
            character: 'Thor'
        }
    ];
    return Avengers;
});

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}