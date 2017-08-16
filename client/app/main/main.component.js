import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
   /*@ngInject*/
  constructor($http, $uibModal, User, Recipe) {
    this.$http = $http;
    this.$uibModal = $uibModal;
    this.User = User;
    this.Recipe = Recipe;
    this.getUserData();
    this.getRecipeData();
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

  updateUser(user) {
    this.$uibModal.open({
      template: require('../../components/updateUserModal/updateUserModal.html'),
      controller: 'updateUserController as updateUserController',
      resolve: {
        user: () => user
      }
    });
    console.log(user);
  }

  createUser(user) {
    this.$uibModal.open({
      template: require('../../components/createUserModal/createUserModal.html'),
      controller: 'createUserController as createUserController',
      resolve: {
        user: () => user
      }
    });
    console.log(user);
  }

  getRecipeData() {
    this.Recipe.getAllRecipes()
         .then(response => {
           this.recipes = response;
         })
         .catch(error => {
           console.error(error);
         });
  }

  createRecipe(recipe) {
    this.$uibModal.open({
      template: require('../../components/createRecipeModal/createRecipeModal.html'),
      controller: 'createRecipeController as createRecipeController',
      resolve: {
        recipe: () => recipe
      }
    });
    console.log(recipe);
  }

  updateRecipe(recipe) {
     // TODO: implement this as a modal
    console.log(recipe);
  }
}

export default angular.module('comp3705App.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'mainController'
  })
  .name;
