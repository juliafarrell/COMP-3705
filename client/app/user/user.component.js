import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './user.routes';

export class UserController {
   /*@ngInject*/
  constructor($routeParams) {
    this.$routeParams = $routeParams;
  }
}


export function getUserById($http) {
  'ngInject';
  this.id = this.$routeParams.id;
  return $http.get('/api/users/' + this.id);
}


export default angular.module('comp3705App.user', [ngRoute])
   .config(routing)
   .component('user', {
     template: require('./user.html'),
     controller: UserController,
     controllerAs: 'UserController'
   })
   .name;
