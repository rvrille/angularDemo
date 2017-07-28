(function(angular){
	var app = angular.module('detailsApp',[]);
	app.controller('detailsController',['$scope','$routeParams','$http','$sce',function($scope,$routeParams,$http,$sce){
		$http.get('http://route.showapi.com/213-4?topid=5&showapi_appid=40171&showapi_sign=6097c7e0082e4ec9a74e9e9556ed51f7').then(function(data){
			console.log($routeParams)
			$scope.data = data.data.showapi_res_body.pagebean.songlist;
			for(var i=0;i<$scope.data.length;i++){
				if($scope.data[i].songid==$routeParams.id){
					$scope.data = $scope.data[i];
					$scope.data.url=$sce.trustAsResourceUrl($scope.data.url);
				}
			}		
			console.log($sce)
			console.log($scope.data)
		})
	}])
})(angular)
