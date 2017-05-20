(function() {
  function HomeCtrl(Task,$scope,$firebaseArray) {
    this.title = "Tasks Manager"
    this.tasks = Task.all;
    
    this.activeList
    this.completedList = Task.completedTasks;

    this.createTask = function (value) {
      Task.addTask(value);
      this.taskName = ""
    }
    this.removeTask = function(task) {
      Task.deleteTask(task);
 	}

    this.completed = function(task) {
      console.log('checked');
     Task.completed(task);
     this.completedList.push(task)
    }

    }




  angular
    .module('taskApp')
    .controller('HomeCtrl', ['Task','$firebaseArray', HomeCtrl]);
})();
