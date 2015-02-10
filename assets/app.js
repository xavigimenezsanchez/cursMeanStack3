var app = angular.module('appLearn',[]);
app.controller('MissatgesController',function($scope,MissatgesService) {
        MissatgesService.fetch()
        .success(function(missatges){
            $scope.missatges = missatges;
        })
        .error(function(e){
            console.log(e);
        });

        $scope.afegirMissatge = function() {
            if ($scope.missatgeBody){
                MissatgesService.create({
                    username: "xavigimenez",
                    body: $scope.missatgeBody
                }).success(function(missatge) {
                    $scope.missatges.unshift(missatge);
                    $scope.missatgeBody = null;
                });
            }
        };
});
        
app.service("MissatgesService", function($http) {
    this.fetch = function() {
        return $http.get("/api/missatges");
    };
    this.create = function(missatge) {
        return $http.post("/api/missatges", missatge);
    };
});