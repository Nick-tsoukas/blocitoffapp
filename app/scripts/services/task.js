(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref();
    var tasks = $firebaseArray(ref);
    var completedTasks = [];
    var activeTasks = [];
    var expiredList = [];
    var Seven_days = 604800000;
    var timeNow = new Date().getTime();
    tasks.$loaded()
      .then(function(x) {
        console.log(x);
        tasks.forEach(function(task) {
          if (task.completed) {
            completedTasks.push(task);
          }
          if ((timeNow - task.startedAt) > Seven_days) {
            expiredList.push(task);
          }
        })
      });

    return {
      check: function(task) {
        tasks.forEach(function(task) {
          if (task.startedAt > 1) {
            expiredList.push(task)
          } else {

          }
        })
      },
      addTask: function(newTask,value2) {
         tasks.$add({
          priority : value2,
          name: newTask,
          state: 'active',
          startedAt: firebase.database.ServerValue.TIMESTAMP,
          completed: false


        }).then(function(x) {
          tasks.forEach(function(task) {
            if (!task.completed) {
              activeTasks.push(task);
            }
          })
        });

      },
      completed: function(task, $index) {
        console.log(task);
        task.completed = true;
        task.active = false;
        tasks.$save(task).then(function() {
          console.log('completed task ')
        });

      },
      // delete tasks on click method now working
      deleteTask: function(task) {
        console.log(task)
        tasks.$remove(task);
      },
      completedTasks: completedTasks,
      expiredList: expiredList,

      all: tasks
    };
  }

  angular
    .module('taskApp')
    .factory('Task', ['$firebaseArray', Task])
})();
