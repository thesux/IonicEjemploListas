angular.module('starter.controllers', [])

.controller('EjemploCtrl',function($scope, $rootScope,ws)
{

  $scope.onChange=function(id)
  {
    ws.getMunicipios(id).then(function(arrMunicipios)
    {
      $scope.municipios=arrMunicipios;
      $scope.municipioSelect=$scope.municipios[0];
    },function(error)
    {
      console.log(error);
    });
  }

   ws.getEstados().then(function(arrEstados)
   {
     $scope.estados=arrEstados;
     $scope.estadoSelect=$scope.estados[0];
     ws.getMunicipios(0).then(function(arrMunicipios)
     {
       $scope.municipios=arrMunicipios;
       $scope.municipioSelect=$scope.municipios[0];
     },function(error)
     {
       console.log(error);
     });


   },function(razon){
     console.error(razon);
   });





})
