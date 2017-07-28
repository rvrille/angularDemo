(function(angular){
	var app = angular.module('homePageApp',[]);
	app.controller('homePageController',['$scope','$http',function($scope,$http){
		$http.get('./home_data.json').then(function(data){
			$scope.data = data.data;
			console.log($scope.data);
		})
	}])
})(angular)
	