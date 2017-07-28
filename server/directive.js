(function (angular) {
    var app = angular.module('autoApp',[]);
    app.directive('autoActive',['$location',function ($location) {
        return {
            link:function (scope,ele,attr) {
                scope.loca = $location;
                scope.$watch('loca.url()',function (newValue,oldValue) {
                    var urlStr = ele.children()[0].href.split('#')[1];//获取a标签的href属性值
                    if(newValue.startsWith(urlStr)){
                        ele.parent().children().removeClass('active');//去掉ul下所有li的active样式
                        ele.addClass('active');//给当前li添加active样式
                    }
                })
            }
        }
    }]);
})(angular)
