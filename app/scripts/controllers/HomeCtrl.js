(function() {
  function HomeCtrl(Task,$scope,$firebaseArray,$state) {
  //  $state.transitionTo('home.test');


    this.title = "Tasks Manager"
    this.tasks = Task.all;
    this.image = "..\scripts\background.gif";
    this.activeList
    this.completedList = Task.completedTasks;
    this.expiredList = Task.expiredList;
this.checked = function (task){
  Task.check();
}
    this.createTask = function (value) {
      Task.addTask(value);
      this.taskName = ""
    }
    this.removeTask = function(task) {
      Task.deleteTask(task);
 	}

    this.completed = function(task) {
      var d = new Date();
      var n = d.getMilliseconds();
      console.log(task.startedAt - n)

     Task.completed(task);
       this.expiredList.push(task)
     this.completedList.push(task)
    }

    }




  angular
    .module('taskApp')
    .controller('HomeCtrl', ['Task','$firebaseArray', HomeCtrl]);
})();
