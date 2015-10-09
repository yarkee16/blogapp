angular.module('blog.controllers', ['blog.services'])

.controller('AccountCtrl', function($scope) {})

.controller('PostListCtrl',function  ($scope,Post) {
    $scope.posts = Post.query();
})

.controller('PostDetailCtrl',['$scope', '$routeParams','Post', 'Comment', 'User', function ($scope, $routeParams, Post, Comment, User) {
  $scope.post = {};
  $scope.comments = {};
  $scope.user = {}
  var self = $scope; // Para guardar la referencia
  Post.query({ id: $routeParams.postId })

    .$promise.then(
      //Success
      function (data) {
        self.post = data[0];
        self.user = User.get({ id: self.user.userId });
      },
      //Error
      function (error) {
        console.log(error);
      }
    );
  $scope.comments = Comment.query({ postId: $routeParams.postId });
}])

.controller('PostCreateCtrl', function($scope, $ionicPopup, Post) {
      $scope.create = function() {
      Post.save($scope.post);
      alert(Post);
    };

    $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Exito',
     template: '!Tu Post se ha publicado con exito¡'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
  })
