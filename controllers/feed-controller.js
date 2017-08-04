(function(){
	angular.module('app').controller('feedCtrl',['$scope', '$http', 
		function($scope, $http){

			$http.get('/getNewPics').then(function(res){
				$scope.pics = res.data;
				console.log($scope.pics);

			}, function(error){
				console.error(error);
			});


		}]);


})(window, window.angular);