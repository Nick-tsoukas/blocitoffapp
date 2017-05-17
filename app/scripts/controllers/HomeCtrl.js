(function() {
  function HomeCtrl(Task,$scope,$firebaseArray) {
    this.title = "Tasks Manager"
    this.tasks = Task.all;

    this.createTask = function (value) {
      Task.addTask(value);
    }
    this.removeTask = function(value) {
      console.log('hello world');
      Task.deleteTask();
 	}

    this.completed = function(task) {
      console.log('checked');
      return Task.completed(); 
    }

    }





  angular
    .module('taskApp')
    .controller('HomeCtrl', ['Task','$firebaseArray', HomeCtrl]);
})();
