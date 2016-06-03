angular
.module('AlbumService', [])
.factory('Album', ['$http', function($http) {

    return {
        // call to get all albums
        get : function() {
            return $http.get('/api/albums');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new album
        create : function(albumData) {
            return $http.post('/api/albums', albumData);
        },

        // call to DELETE an album
        delete : function(id) {
            return $http.delete('/api/albums/' + id);
        }
    };

}]);
