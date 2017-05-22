(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref();
    var tasks = $firebaseArray(ref);
    var completedTasks = [];
    var activeTasks = [];
    var expiredList =[];
    var Seven_days = 604800000;
    var timeNow = new Date().getTime();
    tasks.$loaded()
      .then(function(x) {
        console.log(x);
        tasks.forEach(function(task){
          if(task.completed){
            completedTasks.push(task);
          }
           if((timeNow - task.startedAt) > 0){
           expiredList.push(task);
          //  tasks.$remove(task);


           }
          else {

          }
        })
      });

    return {
      check: function(task){
        tasks.forEach(function(task){
           if(task.startedAt > 1){
           expiredList.push(task)
           }
          else {

          }
        })
      },
      addTask: function(newTask) {
        // tying to create method that updates the completed prop on click
        tasks.$add(
          {
          name: newTask,
          state : 'active',
          startedAt: firebase.database.ServerValue.TIMESTAMP,
          completed: false

        });

      },
      completed: function(task, $index){
        console.log(task);
        task.completed = true;
        task.active = false;
        tasks.$save(task).then(function(){
            // tasks.$remove(task);
        });

      },
   // delete tasks on click method now working
      deleteTask : function(task) {
        console.log(task)
        tasks.$remove(task);
      },
      completedTasks: completedTasks,
      expiredList : expiredList,

      all: tasks
    };
  }

angular
  .module('taskApp')
  .factory('Task', ['$firebaseArray', Task])
})();
