(function() {
  function HomeCtrl(Task,$scope,$firebaseArray) {
    this.title = "Tasks Manager"
    this.tasks = Task.all;
    this.test = Task;



    this.createTask = function (value) {
      Task.addTask(value);
      this.taskName = ""
    }
    this.removeTask = function(task) {
      Task.deleteTask(task);
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
