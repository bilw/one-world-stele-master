angular.module('oneWorldSteleApp')
  .factory('MudraService', ['$http',
    function($http) {
      return {
        getMudras: function() {
          return $http.get('/api/team');
        },

        getTeamDetails: function(mudra_title) {
          return $http.get('/api/team/' + mudra_title);
        }
      }
  }]);