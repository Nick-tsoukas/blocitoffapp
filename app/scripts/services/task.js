(function() {
  function Task($firebaseArray) {



    var ref = firebase.database().ref();

    var tasks = $firebaseArray(ref);

    return {
      addTask: function(newTask) {
        tasks.$add({name: newTask}).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        tasks.$indexFor(id); // returns location in the array
        tasks.newTask = " ";
});

      },
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
