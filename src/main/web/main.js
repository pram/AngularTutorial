var app = angular.module("app", [])

app.controller("RoomCtrl", function(){
    this.openDoor= function(){
        alert("creak");
    };
});