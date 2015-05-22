var app = angular.module('navbar', ['supersonic']);

app.controller('DisclaimerController', function ($scope, supersonic) {
	$scope.agree = function () {
		supersonic.ui.modal.hide({
			animation : true
		});
	}
});

