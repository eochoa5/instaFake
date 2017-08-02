(function(window, angular, undefined){

	angular.module('app', ['ngRoute', 'ngFileUpload'])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		
		$routeProvider.when('/feed', {
			templateUrl: 'views/feed.html',
			controller:'feedCtrl'
		});
		$routeProvider.when('/post', {
			templateUrl: 'views/post.html',
			controller:'postCtrl'
		});


		$routeProvider.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode(true);
	}]);
    
	

})(window, window.angular);






