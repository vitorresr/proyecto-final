'use strict';

angular.module('ProductAppProductServices', ['ngResource'])

.service('ProductListService', function( $resource ) {

	this.products = $resource('http://localhost:7070/api/v1/product/list');
});