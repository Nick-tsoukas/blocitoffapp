(function() {
  function CompTask(Task,$scope,$firebaseArray) {
  this.title = "test title"
  this.completedList = Task.completedTasks;
  this.tasks = Task.all;
    }




  angular
    .module('taskApp')
    .controller('CompTask', ['Task','$firebaseArray', CompTask]);
})();
