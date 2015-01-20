angular.module('eventHunt', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
  
	];

	$scope.addPost = function(){
	  if(!$scope.title || $scope.title === '') { return; }
	  $scope.posts.push({
	    title: $scope.title,
	    link: $scope.link,
	    upvotes: 0
	  });
	  $scope.title = '';
	  $scope.link = '';
	};

	$scope.incrementalUpvotes = function(post) {
		post.upvotes += 1;
	};




	}]
);