import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './recipes.routes';

export class RecipeController {
   /*@ngInject*/
  constructor($routeParams) {
    this.$routeParams = $routeParams;
  }
}

export function getRecipeById($http) {
  'ngInject';
  this.id = this.$routeParams.id;
  return $http.get('/api/recipes/' + this.id);
}

export default angular.module('comp3705App.recipes', [ngRoute])
   .config(routing)
   .component('recipes', {
     template: require('./recipes.html'),
     controller: RecipeController,
     controllerAs: 'RecipeController'
   })
   .name;
