'use strict';

angular.module('multiplyMe')
  .factory('name', function ($resource, api) {
    return $resource(api + 'name/:id', {id: '@id'} );
  });
