(function (angular) {
    var app = angular.module('jsonpApp',[]);
    app.service('$jsonp',['$window',function ($window) {
        //构造函数
        this.jsonp=function (url,data,fn) {
            console.log('这是jsonApp模块上的$jsonp服务上的jsonp方法');
            /*jsonp({
                url:"https://api.douban.com/v2/movie/top250",
                data:{
                    start:0,
                    count:10
                },
                function(){
                }
            })
            <script src="https://api.douban.com/v2/movie/top250?start=0&count=10&callback=fn>
            */
            //必须有一个fn函数，必须有一个script标签，请求目标api？callback=fn，每次的函数名不能都是fn
            var querystr = url+"?";
            var data = data;
            //序列化data
            for(var key in data){
                querystr+=key+"="+data[key]+"&"
            }
            var callbackName ='jsonp'+Math.random().toString().substr(2);//生产随机函数名
            querystr+='callback='+callbackName;
            $window[callbackName]= function (data) {//生产一个指定名字的函数
                fn(data);
                $window.document.body.removeChild(script);
            };
            var script = document.createElement('script');//生产一个script标签
            script.src= querystr;
            $window.document.body.appendChild(script);
        }
    }])
})(angular);
// function Human() {
//     this.age =12;
//     this.showAge = function () {
//         consle.log(this.age)
//     }
// }
// var humen = new Human();
