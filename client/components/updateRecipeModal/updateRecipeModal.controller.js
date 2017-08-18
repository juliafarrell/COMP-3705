import angular from 'angular';

export class UpdateRecipeController {
   /*@ngInject*/
  constructor($uibModalInstance, Recipe, recipe) {
    this.$uibModalInstance = $uibModalInstance;
    this.Recipe = Recipe;
    this.recipe = recipe;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.Recipe.updateRecipe(this.recipe);
    this.$uibModalInstance.dismiss('cancel');
  }
}

export default angular.module('comp3705App.updateRecipeModal', [])
   .controller('updateRecipeController', UpdateRecipeController)
   .config(['$qProvider', function($qProvider) {
     $qProvider.errorOnUnhandledRejections(false);
   }])
   .name;
