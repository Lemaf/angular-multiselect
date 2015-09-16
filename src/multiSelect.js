(function() {

	var modulo = angular.module('appModule');

	modulo.directive('multiSelect', function() {
		return {
			restrict: 'E',
			scope: {
				selectedItems: '=',
				options: '=',
				fieldName: '@',
				allIfNone: '='
			},
			template: "<div class='form-group'>" +
							"<label class='item-label'>{{fieldName}}:</label>" +
							"<select ng-model='item' ng-options='item.nome for item in options' ng-change='adicionaItem(item)' class='form-control combo-box'></select>" +
						"</div>" +
						"<div class='form-group'>" +
							"<fieldset>" +
								"<legend>{{fieldName}} selecionados</legend>" +
								"<div class='input-form'>" +
									"<span ng-show='!allIfNone && (!selectedItems || selectedItems.length == 0)' class='text-center'>Nenhuma item adicionado</span>" +
									"<span ng-show='allIfNone && (!selectedItems || selectedItems.length == 0)' class='list-item-selecionado'>Todos</span>" +
									"<span ng-repeat='selectedItem in selectedItems' class='list-item-selecionado'>{{selectedItem.nome}}" +
										"<span ng-click='removeItemAdicionado(selectedItem)' class='glyphicon glyphicon-remove'>" +
										"</span>" +
									"</span>" +
								"</div>" +
							"</fieldset>" +
						"</div>",
			controller: function($scope) {

				$scope.adicionaItem = function() {
					
					if ($scope.selectedItems.length !== 0 && $scope.selectedItems[0].nome === 'Todos')
						$scope.selectedItems = [];

					var item = {
						id: $scope.item.id,
						nome: $scope.item.nome
					};
						
					$scope.removeItem($scope.options, item);

					$scope.selectedItems.push(item);
					$scope.selectedItems = _.sortBy($scope.selectedItems, 'nome');
					$scope.item = undefined;

				};

				$scope.removeItemAdicionado = function(item) {

					$scope.removeItem($scope.selectedItems, item);
					$scope.adicionaItemRemovido(item);

				};

				$scope.adicionaItemRemovido = function(item) {

					$scope.options.push(item);
					$scope.options = _.sortBy($scope.options, 'nome');

				};

				$scope.removeItem = function(list, item) {
			
					if(!item)
						return;

					for (var i = 0; i < list.length; i++) {
						
						if (list[i] && list[i].nome === item.nome) {

							list.splice(i, 1);
							i--;

						}

					}

				};

			}

		};

	});

})();