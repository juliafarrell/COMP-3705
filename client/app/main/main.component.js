const uiBootstrap = require('angular-ui-bootstrap');
import user from '../../components/userService/user.module';
import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
   /*@ngInject*/
  constructor($http, $uibModal, User) {
    this.$http = $http;
    this.$uibModal = $uibModal;
    this.User = User;
    this.setData();
    this.getUserData();
    this.alerts = [
        { type: 'danger', msg: 'RAWR.' },
        { type: 'success', msg: 'Woof' }
    ];
  }

  $onInit() {

  }

  setData() {
    this.values = ['first', 'second', 'third'];
    this.valueToSquare = 4;
  }

  getUserData() {
    this.User.getAllUsers()
         .then(response => {
           this.users = response;
         })
         .catch(error => {
           console.error(error);
         });
  }

  updateUser(userA) {
    this.$uibModal.open({
      template: require('../../components/updateUserModal/updateUserModal.html'),
      controller: 'updateUserController as updateUserController',
      resolve: {
        user: () => userA
      }
    });
    console.log(userA);
  }

  createUser(userA) {
    this.$uibModal.open({
      template: require('../../components/createUserModal/createUserModal.html'),
      controller: 'createUserController as createUserController',
      resolve: {
        user: () => userA
      }
    });
    console.log(userA);
  }

  addAlert = function(message) {
    this.alerts.push({msg: message});
  };

  closeAlert = function(index) {
    this.alerts.splice(index, 1);
  };
}

export function SquareFilter() {
  var squareFunction = function(value) {
    return value * value;
  };
  return squareFunction;
}

export default angular.module('comp3705App.main', [ngRoute, uiBootstrap, user])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'mainController'
  })
  .filter('Square', SquareFilter)
  .name;
