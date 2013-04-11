			function makeCall() {
				var url = "http://personalfinancesmanager.azurewebsites.net/api/Expenses";
				$.ajax({
					headers : {
						"Content-Type" : "application/json; charset=UTF-8"
					},
					type : "GET",
					url : url,
					dataType : "json",
					success : function(data) {
						$scope.lista = data;
					},
					error : function() {}
				});
			}

			function TesteCtrl($scope, $window, $http) {

				var init = function() {

					$http.get('http://personalfinancesmanager.azurewebsites.net/api/Expenses').success(function(data) {
						$scope.lista = data;
					});

				};

				init();

			}