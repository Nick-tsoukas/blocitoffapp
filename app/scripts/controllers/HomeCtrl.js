(function() {
  function HomeCtrl(Task,$scope,$firebaseArray,$state) {
  //  $state.transitionTo('home.test');


    this.title = "Tasks Manager"
    this.tasks = Task.all;
    this.image = "..\scripts\background.gif";
    this.activeList
    this.completedList = Task.completedTasks;
    this.expiredList = Task.expiredList;
    this.createTask = function (value) {
      Task.addTask(value);
      this.taskName = ""
    }
    this.removeTask = function(task) {
      Task.deleteTask(task);
 	}

    this.completed = function(task) {
     Task.completed(task);
     this.completedList.push(task)
    }

    }




  angular
    .module('taskApp')
    .controller('HomeCtrl', ['Task','$firebaseArray', HomeCtrl]);
})();
