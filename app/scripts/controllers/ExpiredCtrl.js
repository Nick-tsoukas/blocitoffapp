(function() {
  function ExpiredCtrl(Task,$scope,$firebaseArray,$state) {
  this.test = "hello world";
  this.expiredList = Task.expiredList;
    }




  angular
    .module('taskApp')
    .controller('ExpiredCtrl', ['Task','$firebaseArray', ExpiredCtrl]);
})();
