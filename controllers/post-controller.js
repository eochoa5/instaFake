(function(){
	angular.module('app').controller('postCtrl',['$scope', '$http', 'Upload',
		function($scope, $http, Upload){

			$scope.file = undefined;

			$scope.upload = function(){

				var request = {
					name: $scope.name,
					description: $scope.description
				};

				Upload.upload({
					url:'/share',
					data:{file:$scope.file, req:request}
				}).then(function(){
					//redirect to feed
					window.location.href = "/feed";

				}, function(err){
					console.error("error uploading");
				});
			}

			$scope.$watch(function(){

				return $scope.file;

			}, function(){
				console.log($scope.file);
			});


		}]);


})(window, window.angular);