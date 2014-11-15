'use strict';

var app = angular.module('decide', []);

app.controller('MainController', ['$scope', function($scope) {
	$scope.choices = localStorage.choices ? JSON.parse(localStorage.choices) : ['stay', 'go'];
	$scope.choice = null;

	$scope.add = function() {
		$scope.choices.push('');
	}

	$scope.decide = function() {
		$scope.choices = _.compact($scope.choices);
		localStorage.choices = JSON.stringify($scope.choices);
		$scope.choice = $scope.choices[Math.floor(Math.random() * $scope.choices.length)];
	}
}]);