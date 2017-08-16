'use strict';

import angular from 'angular';
import {
  RecipeService
} from './recipes.service';

export default angular.module('comp3705App.recipe', [])
  .factory('Recipe', RecipeService)
  .name;


