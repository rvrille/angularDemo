(function(angular){
	var app = angular.module('zhihuApp',['ngRoute','homePageApp','sisterApp','musicApp','detailsApp','guessApp']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/home_page',{
			templateUrl:'./home_page/template.html',
			controller:'homePageController'
		}).when('/details/:id',{//详情页
            templateUrl:'./details/template.html',
            controller:'detailsController'
        }).when('/sister',{
			templateUrl:'./sister/template.html',
			controller:'sisterController'
		}).when('/music/:page?',{
			templateUrl:'./music/template.html',
			controller:'musicController'
		}).when('/guess',{
			templateUrl:'./guess/template.html',
			controller:'guessController'
		}).otherwise({
			redirectTo:'/home_page'
		})
	}]);
	
	app.controller('zhihuController',['$scope','$location',function($scope,$location){
		$scope.word='';
        $scope.search=function () {
            //search是搜索提交触发的函数，功能是调整锚点到/search?q=关键字
            $location.url('/search?q='+$scope.word);
        }
	}])
})(angular);
