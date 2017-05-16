(function() {
  function Task($firebaseArray) {



    var ref = firebase.database().ref();

    var tasks = $firebaseArray(ref);

    return {
      addTask: function(newTask) {
        tasks.$add({name: newTask});
      },
      deleteTask : function(e) {
        console.log('fire')
        tasks.$remove(e);
      },
      all: tasks
    };
  }

angular
  .module('taskApp')
  .factory('Task', ['$firebaseArray', Task])
})();
