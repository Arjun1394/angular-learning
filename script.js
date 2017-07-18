angular.module("todo", []);

// Angular controller style-1
angular.module("todo").controller("ListController", ["$log", "$scope", function ($log, $scope) {
	$scope.items = ["Arjun", "Bala", "Calvin", "David"];
	$scope.$watch("name", function (newValue, oldValue) {
		if (newValue !== oldValue) {
			console.log("newValue %s, oldValue %s", newValue, oldValue);
		}	
	});
}]);

// Angular controller style-2
function TodoController ($log) {
	this.items = ["Elves", "Fazil", "Gowtham", "Hari"];
	this.compare = 66;
}

TodoController.$inject = ["$log"];

TodoController.NAME = "TodoController";

angular.module("todo").controller(TodoController.NAME, TodoController);



function FormController ($log, $scope) {

	var vm = this;
	
	//submit using method-1

	this.submit = function () {
		console.log(vm.add, vm.add2);
	}
	

// submit using method-2
	vm.submitOne = submitOne;

	function submitOne () {
		console.log(vm.add,vm.add2);
	}

	$scope.$watch(function () {
		return vm.add;
	}, function (newValue, oldValue) {
		if (newValue !== oldValue) {
			console.log("newValue %s, oldValue %s", newValue, oldValue);
		}	
	});

	$scope.$watch(function () {
		return vm.add2;
	}, function (newValue, oldValue) {
		if (newValue !== oldValue) {
			console.log("newValue %s, oldValue %s", newValue, oldValue);
		}	
	});
}

// submit using method-3
FormController.prototype.submitPrototype = function () {
	console.log(this.add, this.add2);
}

FormController.$inject = ["$log", "$scope"];

FormController.NAME = "FormController";

angular.module("todo").controller(FormController.NAME, FormController);