(function() {
  function Task($firebaseArray) {



    var ref = firebase.database().ref();

    var tasks = $firebaseArray(ref);

    return {
      addTask: function(newTask) {
        tasks.$add({name: newTask});
      },
       Test: function(some){
         console.log('hello')
       },
      all: tasks
    };
  }

angular
  .module('taskApp')
  .factory('Task', ['$firebaseArray', Task])
})();
