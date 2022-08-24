// Define the `phonecatApp` module
var ctApp = angular.module('ct-app', []);
console.log(ctApp);
// Define the `PhoneListController` controller on the `phonecatApp` module
ctApp.controller('main-ctlr', function mainCntrlr($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});