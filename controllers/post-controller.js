(function(){
	angular.module('app').controller('postCtrl',['$scope', '$http', 
		function($scope, $http){

			$scope.file = undefined;

			$scope.$watch(function(){

				return $scope.file;

			}, function(){
				console.log($scope.file);
			});


		}]);


})(window, window.angular);