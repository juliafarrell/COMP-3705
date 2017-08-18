import angular from 'angular';

export class areYouSureController {
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
    this.Recipe.deleteRecipe(this.recipe._id);
    this.$uibModalInstance.dismiss('submit');
  }
}

export default angular.module('comp3705App.areYouSureController', [])
   .controller('areYouSureController', areYouSureController)
   .config(['$qProvider', function($qProvider) {
     $qProvider.errorOnUnhandledRejections(false);
   }])
   .name;
