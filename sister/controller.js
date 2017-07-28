(function(angular){
	var app = angular.module('sisterApp',[]);
	app.controller('sisterController',['$scope','$http',function($scope,$http){
		$http.get('http://route.showapi.com/255-1?showapi_appid=40171&showapi_sign=6097c7e0082e4ec9a74e9e9556ed51f7').then(function(data){
			$scope.data = data.data.showapi_res_body.pagebean.contentlist;
			console.log($scope.data)
		})
	}])
})(angular)
