/**
 * Created by Bruna on 18/10/2016.
 */
(function() {
    "use strict";
    angular.module("starter").config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/menu/home");

        $stateProvider
            .state("menu",{
                url:"/menu",
                templateUrl:"views/menu.html",
                abstract:true,
                controller:"initCtrl"
            })

            .state("menu.home", {
                url:"/home",
                views:{
                    'menuContent':{
                        templateUrl:"views/home.html"
                    }
                }
            })
            .state("menu.video", {
                url:"/video",
                views:{
                    'menuContent':{
                        templateUrl:"views/video.html"
                    }
                }
            });
    });
})();