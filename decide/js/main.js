'use strict';

var app = angular.module('decide', []);

app.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.choices = localStorage.choices ? JSON.parse(localStorage.choices) : ['stay', 'go'];
	$scope.choice = null;

	$scope.add = function() {
		$scope.choices.push('');
		$timeout(function() {
			$('input[type="text"]:last').focus();
		}, 0);
	}

	$scope.remove = function(i) {
		$scope.choices.splice(i, 1);
	}

	$scope.decide = function() {
		$scope.choices = _.compact($scope.choices);
		localStorage.choices = JSON.stringify($scope.choices);
		$scope.choice = $scope.choices[Math.floor(Math.random() * $scope.choices.length)];
	}
}]);