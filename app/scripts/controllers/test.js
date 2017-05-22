(function() {
  function TestCtrl(Task,$scope,$firebaseArray,$state) {
this.test = 'this is a test';
    }




  angular
    .module('taskApp')
    .controller('TestCtrl', ['Task','$firebaseArray', TestCtrl]);
})();
