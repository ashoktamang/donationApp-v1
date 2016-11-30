angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('colleges', {
    url: '/colleges',
    templateUrl: 'templates/colleges.html',
    controller: 'collegesCtrl'
  })

  .state('collegeDetails', {
    url: '/collegeDetails',
    templateUrl: 'templates/collegeDetails.html',
    controller: 'collegeDetailsCtrl'
  })

  .state('paymentForm', {
    url: '/paymentForm',
    templateUrl: 'templates/paymentForm.html',
    controller: 'paymentFormCtrl'
  })

$urlRouterProvider.otherwise('/colleges')

  

});