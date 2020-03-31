var app = angular.module('kra.user',[]);


app.config(['$stateProvider',function ($stateProvider) {
    $stateProvider
        .state('userindex', {
            url: "/",
            views: {
                "headerView@": {
                    templateUrl: '/static/user/components/layout/views/header.html',
                    controller: 'layoutCtrl',
                    controllerAs: '$Ctrl'

                },
                "sidebarView@": {
                    templateUrl: '/static/user/components/layout/views/sidebar.html',
                    controller: 'loginCtrl',
                    controllerAs: '$Ctrl'

                },
                "mainContent@": {
                    controller: function ($scope, $state) {
                        // $scope.currentNav = null;
                        // $scope.childNav = null;
                        //
                        // if ($state.current.name == 'admin')
                        //     $state.go("admin.dashboard");
                    }
                }
            },
            resolve: {
                authprovideradmin: function (AdminLoginService) {

//          return AdminLoginService.getCurrentAuthProvider();
                    return true;

                }
            }
        })
}])
