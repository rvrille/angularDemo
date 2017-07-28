(function(angular){
	var app = angular.module('musicApp',[]);
	app.controller('musicController',['$scope','$http','$routeParams','$route',function($scope,$http,$routeParams,$route){
		$http.get('http://route.showapi.com/213-4?topid=5&showapi_appid=40171&showapi_sign=6097c7e0082e4ec9a74e9e9556ed51f7').then(function(data){
			console.log(data.data)
			$scope.total=data.data.showapi_res_body.pagebean.songlist.length;
//			console.log($routeParams.page)
			$scope.page = $routeParams.page-0 || 1;
			$scope.count = Math.round($scope.page)+1;
			$scope.end = 10;
			$scope.totalpage = $scope.total/$scope.end;
			$scope.data = data.data.showapi_res_body.pagebean.songlist.slice(($scope.page-1)*$scope.end,$scope.count*$scope.end);
			
//			console.log($routeParams.page*$scope.end)
//			console.log($scope.count*$scope.end)
//			console.log($scope.data)
//			$scope.$apply();
			$scope.next=function(){
				$scope.page++;
				if($scope.page>10){
					$scope.page=10;
				}
				$route.updateParams({page:$scope.page})
			}
			$scope.prev=function(){
				$scope.page--;
				if($scope.page<1){
					$scope.page=1;
				}
				$route.updateParams({page:$scope.page})
			}
//			console.log($scope.page)
		})
	}])
})(angular)
