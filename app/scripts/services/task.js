(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref();
    var tasks = $firebaseArray(ref);

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
          },
   // delete tasks on click method now working
      deleteTask : function(task) {
        console.log(task)
        tasks.$remove(task);
      },
      all: tasks
    };
  }

angular
  .module('taskApp')
  .factory('Task', ['$firebaseArray', Task])
})();
