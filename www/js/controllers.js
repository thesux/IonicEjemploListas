angular.module('starter.controllers', [])

.controller('EjemploCtrl',function($scope, $rootScope,ws)
{


   ws.getEstados().then(function(arrEstados){
     console.log(arrEstados);
     $scope.estados=arrEstados;
     $scope.estadoSelect=$scope.estados[1];
   },function(razon){
     console.error(razon);
   });





})
