(function() {
  function HomeCtrl(Task, $scope, $firebaseArray, $state) {
    this.tasks = Task.all;
    this.completedList = Task.completedTasks;
    this.expiredList = Task.expiredList;



    this.priority = [
      "High",
      "Medium",
      "Low"


    ];


    this.createTask = function(value,value2) {
      Task.addTask(value,value2);
      this.taskName = "";
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
    .controller('HomeCtrl', ['Task', '$firebaseArray', HomeCtrl]);
})();
