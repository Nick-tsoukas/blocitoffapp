(function() {
  function ExpiredCtrl(Task,$scope,$firebaseArray) {
  this.expiredList = Task.expiredList;
    }

  angular
    .module('taskApp')
    .controller('ExpiredCtrl', ['Task','$firebaseArray', ExpiredCtrl]);
})();
