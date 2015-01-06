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
        }
    ];
    return Avengers;
});

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}