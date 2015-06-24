'use strict';

angular.module('ProductAppProductControllers', ['ProductAppProductServices'])

.controller('list', function($scope, ProductListService){

	 ProductListService.products.query( function( data ) {

        $scope.products = data;

    });

})