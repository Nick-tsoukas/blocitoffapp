(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref();
    var tasks = $firebaseArray(ref);
    var completedTasks = [];

    tasks.$loaded()
      .then(function(x) {
        tasks.forEach(function(task){
          // if completed, put into completed array
          if(task.completed === true){
            completedTasks.push(task);
            console.log("completed task added to array");
          }
          else {
            // put into active array
          }
        })
      });

    return {
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
      // Not in use
      completed: function(task){
        console.log(task);
        task.completed = true;
        task.active = false;
        tasks.$save(task);
      },
   // delete tasks on click method now working
      deleteTask : function(task) {
        console.log(task)
        tasks.$remove(task);
      },
      completedTasks: completedTasks,
      all: tasks
    };
  }

angular
  .module('taskApp')
  .factory('Task', ['$firebaseArray', Task])
})();
