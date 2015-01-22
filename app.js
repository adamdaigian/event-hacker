
angular.module('eventHunt', [])

	.factory('posts', [function(){
	  var o = {
	    posts: []
	  };
	  return o;
	}])
	
	.controller('MainCtrl', [
		'$scope',
		'posts',
		function($scope, posts){
  	
  		$scope.posts = posts.posts;

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
			console.log('voting');
			post.upvotes += 1;
		};

		$scope.incrementalDownvotes = function(post) {
			console.log('voting');
			post.upvotes -= 1;
		};




	}]
);