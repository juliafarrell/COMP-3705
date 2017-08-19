import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './recipes.routes';

export class RecipeController {
   /*@ngInject*/
  constructor($routeParams, Recipe) {
    this.$routeParams = $routeParams;
    this.Recipe = Recipe;
    this.getRecipeData();
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
    this.$uibModal.open({
      template: require('../../components/updateRecipeModal/updateRecipeModal.html'),
      controller: 'updateRecipeController as updateRecipeController',
      resolve: {
        recipe: () => recipe
      }
    });
    console.log(recipe);
  }

  deleteRecipe(recipe) {
    this.$uibModal.open({
      template: require('../../components/areYouSure/areYouSure.html'),
      controller: 'areYouSureController as areYouSureController',
      resolve: {
        recipe: () => recipe
      }
    });
    console.log('might delete ' + recipe.name);
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
     controllerAs: 'recipeController'
   })
   .name;
