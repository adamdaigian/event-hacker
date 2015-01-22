angular.module('eventHunt', [])

// .config([ '$stateProvier', '$urlRouterProvider', function($stateProvier, $urlRouterProvider) {
// 	$stateProvier(
//     .state('home', {
//       url: '/home',
//       templateUrl: '/home.html',
//       controller: 'MainCtrl'
//     })
//     .state('posts', {
//       url: '/posts/{id}',
//       templateUrl: '/posts.html',
//       controller: 'PostsCtrl'
//     });

// 	$urlRouterProvider.otherwise('home');
// }])

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('MainCtrl', [ '$scope' function($scope) {
	$scope.posts = []
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
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
}]);

.controller('PostsCtrl', [ '$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
	$scope.posts.push({
	  title: $scope.title,
	  link: $scope.link,
	  upvotes: 0,
	  comments: [
	    {author: 'Joe', body: 'Cool post!', upvotes: 0},
	    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
	  ]
	});
}]);