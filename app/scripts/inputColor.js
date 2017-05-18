

  (function() {
    function inputColor() {
      return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
          var element = $element[0];
          element.addEventListener('focus', function () {
            this.style.color = 'green';
          });
          element.addEventListener('blur', function () {
            this.style.color = 'gray';
          });
        }
      };
    }





    angular
      .module('taskApp')
      .directive('inputColor', inputColor);
  })();
