'use strict';
 
var App = angular.module('myApp',['ngRoute']);

//routing

App.config(function($routeProvider){
	
	$routeProvider
	
	.when('/userDetails',{
		//templateUrl : './../WEB-INF/views/userDetails.html',
		template:"Hi this is Parshu ram",
		controller  : 'UserDetailsController'
	})
	
});