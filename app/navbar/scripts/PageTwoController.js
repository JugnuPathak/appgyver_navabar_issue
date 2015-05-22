angular.module('navbar')
	.controller('PageTwoController', ['$scope', function ($scope) {
	    supersonic.ui.views.current.whenVisible( function() {
			var leftButton = new supersonic.ui.NavigationBarButton( {
				title: "Left",
				onTap: function() {
					supersonic.ui.dialog.alert("Left button tapped!");
				}
		    });
			options = {
				overrideBackButton: true,
				buttons: {
					left: [leftButton]
				}
			}
			supersonic.ui.navigationBar.update(options);
		});
	}]);