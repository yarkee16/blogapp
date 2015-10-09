angular.module('blog.services', ['ngResource']).constant('BaseUrl', 'http://jsonplaceholder.typicode.com')

.factory('Post', function  ($resource, BaseUrl) {
  return $resource(BaseUrl + '/posts/:postId',
    { postId: '@_id' });
})
.factory('Comment', function ($resource, BaseUrl) {
  return $resource(BaseUrl + '/comments/:commentId',
    { commentId: '@_id' });
})
.factory('User',function ($resource, BaseUrl) {
  return $resource(BaseUrl + '/users/:userId',
    { userId: '@_id' });
})
