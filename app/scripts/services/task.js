(function() {
  function Task($firebaseArray) {



    var ref = firebase.database().ref();

    var tasks = $firebaseArray(ref);

    return {
      addTask: function(newTask) {
        tasks.$add(
          {
          name: newTask,
          state : 'active',
          startedAt: firebase.database.ServerValue.TIMESTAMP,
          completed: false

        });

      },
      // Not in use
      completed: function(){
        console.log('hello world');
          return  tasks.completed = true;
          },
   // method not in use
      deleteTask : function(id) {
        console.log('fire')
        tasks.$remove(tasks[tasks.length -1]);
      },
      all: tasks
    };
  }

angular
  .module('taskApp')
  .factory('Task', ['$firebaseArray', Task])
})();
