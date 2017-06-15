(function() {
  function CompCtrl(Task,$firebaseArray) {
  this.completedList = Task.completedTasks;
  this.tasks = Task.all;
    }




  angular
    .module('taskApp')
    .controller('CompCtrl', ['Task','$firebaseArray', CompCtrl]);
})();
