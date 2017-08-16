'use strict';

export function RecipeService($resource) {
  'ngInject';
  var Recipe = {
    getAllRecipes() {
      return $resource('/api/recipes/').query().$promise;
    },
    getUserById(recipeId) {
      return $resource('/api/recipes/:id').get({id: recipeId}).$promise;
    },
    updateRecipe(recipe) {
      let updateResource = $resource('/api/recipes/:id', null,
        {
          update: {method: 'PUT'}
        });
      return updateResource.update({id: recipe._id}, recipe);
    },
    createRecipe(recipe) {
      let createResource = $resource('/api/recipes/', null,
        {
          create: {method: 'POST'}
        });
      return createResource.create(recipe);
    }
  };
  return Recipe;
}
