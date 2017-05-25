(function() {
    function HomeCtrl(Task, $scope, $firebaseArray, $state) {
      this.tasks = Task.all;
      this.completedList = Task.completedTasks;
      this.expiredList = Task.expiredList;

      this.createTask = function(value) {
        Task.addTask(value);
        console.log();

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
