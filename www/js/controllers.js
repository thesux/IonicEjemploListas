angular.module('starter.controllers', [])

.controller('EjemploCtrl',function($scope, $rootScope,ws)
{


   ws.getEstados().then(function(arrEstados)
   {
     $scope.estados=arrEstados;
     $scope.estadoSelect=$scope.estados[0];
   },function(razon){
     console.error(razon);
   });





})
