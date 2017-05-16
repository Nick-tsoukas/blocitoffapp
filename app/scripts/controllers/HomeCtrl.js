(function() {
  function HomeCtrl(Task,$scope,$firebaseArray) {
    this.title = "Tasks Manager"
    this.tasks = Task.all;

    this.createTask = function (value) {
      Task.addTask(value);
    }
 	}

    this.removeTask = function(value) {
      Task.deleteTask(value);
    }





  angular
    .module('taskApp')
    .controller('HomeCtrl', ['Task','$firebaseArray', HomeCtrl]);
})();
