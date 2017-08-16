import angular from 'angular';

export class CreateRecipeController {
   /*@ngInject*/
  constructor($uibModalInstance, Recipe, recipe) {
    this.Recipe = Recipe;
    this.recipe = recipe;
    this.$uibModalInstance = $uibModalInstance;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.recipe.ingredients = ['none yet'];
    this.recipe.directions = ['none yet'];
    this.Recipe.createRecipe(this.recipe);
    this.$uibModalInstance.dismiss('submit');
  }
}

export default angular.module('comp3705App.createRecipeModal', [])
   .controller('createRecipeController', CreateRecipeController)
   .config(['$qProvider', function($qProvider) {
     $qProvider.errorOnUnhandledRejections(false);
   }])
   .name;
