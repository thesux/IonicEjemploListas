angular.module('starter.services', [])

.factory("ws",function($http,$q,$window)
{

  function getEstados()
  {
    var deferred = $q.defer();
    $http.get('http://eonproduccion.net/MobileApps/WS/03.ConfialeSecretario.php/customQuery')
    .then(function(response){
      deferred.resolve(response.data);
    },function(razon){
      deferred.reject(razon);
    });
    return deferred.promise;
  }

  function getMunicipios(id)
  {
    var deferred = $q.defer();
    $http.get('http://eonproduccion.net/MobileApps/WS/03.ConfialeSecretario.php/estado/'+(id+1)+'/municipios')
    .then(function(response){
      deferred.resolve(response.data);
    },function(razon){
      deferred.reject(razon);
    });
    return deferred.promise;
  }


  return {getEstados: getEstados,
          getMunicipios: getMunicipios};
})
