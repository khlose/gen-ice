//have to import moltingateway from sdk, how to??
angular.module('genIceApp.moltin',[])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    /*
    var moltin = new Moltin({publicId:'Lcq3R7VKWqyWgPWbBr3lDQsWTohr9XouLiyVrw5O5N'});
    moltin.Authenticate(function(){
      deferred.resolve(moltin);
    });
  */
  
    var Moltin = MoltinGateway({
      client_id: 'Lcq3R7VKWqyWgPWbBr3lDQsWTohr9XouLiyVrw5O5N'
    });
    Moltin.Authenticate(function(){
      deferred.resolve(Moltin)
    });
    return deferred.promise;
   
    
  });