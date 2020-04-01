var app = angular.module('kraApp',[
    'kra.user.layout',
    'ui.router'
])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('user', {
            url: "/",
            views: {
                "headerView": {
                    templateUrl: '/static/user/components/layout/views/header.html',
                    controller: 'layoutCtrl',
                    controllerAs: '$Ctrl'

                },
                "sidebarView": {
                    templateUrl: '/static/user/components/layout/views/sidebar.html',
                    controller: 'layoutCtrl',
                    controllerAs: '$Ctrl'

                },
                "mainContent": {
                    templateUrl: '/static/user/components/layout/views/sidebar.html',

                    controller: 'layoutCtrl',
                    controllerAs: '$Ctrl'
                }
            }
        })
        .state('user.goals', {
            url: "/goals",
            views: {
                "mainContent": {
                    templateUrl: '/static/user/components/goals/views/goals.html',
                    controller: 'goalsCtrl',
                    controllerAs: '$Ctrl'
                }
            }
        })
}])
