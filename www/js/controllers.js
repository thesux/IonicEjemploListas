angular.module('starter.controllers', [])

.controller('EjemploCtrl',function($scope, $rootScope,ws)
{

   //$scope.estados=[];
   ws.getEstados().then(function(estados){
     console.log(estados);
   },function(razon){
     console.error(razon);
   });





})
