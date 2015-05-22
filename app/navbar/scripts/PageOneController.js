angular.module('navbar')
	.controller('PageOneController', ['$scope', function ($scope) {
		//Check if user is first time opening application then show disclaimer
		if (true) {
			supersonic.ui.modal.show("disclaimer", {
				animate : true
			});
		}
		
		$scope.redirect = function () {
			//Do some stuff then redirect to second page
			supersonic.ui.layers.push("page-two");
		};
	}]);