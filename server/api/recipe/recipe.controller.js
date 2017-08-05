'use strict';

import {Recipe, Review} from './recipe.model';

// Find all Recipies
export function index(req, res) {
  Recipe.find()
      .populate('reviews')
      .exec()
      .then(function(recipes) {
        res.json(recipes);
      })
      /*
       Any errors encountered here must be server side, since there are no arguments to the find
       Return 500 (server error) and send the error encountered back to the requester
       */
      .catch(function(err) {
        res.status(500);
        res.send(err);
      });
}

// Find details for one recipe
export function show(req, res) {
  Recipe.findById(req.params.id)
      .populate('reviews')
      .exec()
      .then(function(existingRecipe) {
        if(existingRecipe) {
            // Recipe was found by Id
          res.status(200);
          res.json(existingRecipe);
        } else {
            // Recipe was not found
          res.status(404);
          res.json({message: 'Not Found'});
        }
      })
      .catch(function(err) {
        res.status(400);
        res.send(err);
      });
}

// Create a new recipe
export function create(req, res) {
   /*
    In this function we are taking the request body
    As it was sent and using it as the JSON for the address
    and user objects.
    Since address is stored in a separate collection from user
    we must create each document individually, and then associate
    the address to the user after we know its id
    */
  let review = req.body.review;
  let recipe = req.body;
   // Start off by saving the review
  Review.create(review)
   /*
    Review was successfully saved, now associate saved review to the
    recipe we are about to create and then save the recipe
    */
      .then(function(createdReview) {
        recipe.address = createdReview;
        return Recipe.create(recipe);
      })
      // Recipe and Review saved successfully! return 201 with the created recipe object
      .then(function(createdRecipe) {
        res.status(201);
        res.json(createdRecipe);
      })
      // An error was encountered during either the save of the address or the save of the recipe
      .catch(function(err) {
        res.status(400);
        res.send(err);
      });
}
/*
 name: String,
 description: String,
 pictureURL: String,
 prepTime: Number,
 cookTime: Number,
 directions: [String],
 ingredients: [ingredientSchema],
 reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
 */

// Update a recipe
export function update(req, res) {
   // This value will be set by the successful update of the user so that it can be returned
  var updatedRecipe;
   // Start by trying to find the user by its id
  Recipe.findById(req.params.id)
      .populate('reviews')
      .exec()
      // Update recipe and reviews
      .then(function(existingRecipe) {
         // If user exists, update all fields of the object
        if(existingRecipe) {
          existingRecipe.name = req.body.name;
          existingRecipe.description = req.body.description;
          existingRecipe.pictureURL = req.body.pictureURL;
          existingRecipe.prepTime = req.body.prepTime;
          existingRecipe.cookTime = req.body.cookTime;
          existingRecipe.directions = req.body.directions;
          existingRecipe.ingredients = req.body.ingredients;
            // Set externally declared updatedUser so that later promise can return it
          updatedRecipe = existingRecipe;
            /*
             Promise.all takes an array of promises as an argument
             It ensures that all the promises in the array have successfully resolved before
             continuing the promise chain. It will pass to the next .then an array of results, one
             for each promise that was passed
             */
          return Promise.all([
            existingRecipe.address.increment().save(),
            existingRecipe.increment().save()
          ]);
        } else {
            // User was not found
          return null;
        }
      })
      // This .then will be called after the Promise.all resolves, or be called with null if the user was not found
      .then(function(savedObjects) {
         // savedObjects should be defined if Promise.all was invoked (user was found)
        if(savedObjects) {
          res.status(200);
          res.json(updatedRecipe);
        } else {
            // User was not found
          res.status(404);
          res.json({message: 'Not Found'});
        }
      })
      // Error encountered during the save of the user or address
      .catch(function(err) {
        res.status(400);
        res.send(err);
      });
}

// Remove a recipe
export function destroy(req, res) {
  Recipe.findById(req.params.id)
      .populate('review')
      .exec()
      .then(function(existingRecipe) {
        if(existingRecipe) {
            /*
             This is the equivalent of cascading delete in a relational database
             If the user was found, remove both the user object and the address object from
             their respective collections. Only record the delete as successful if both objects
             are deleted
             */
          return Promise.all([
            existingRecipe.address.remove(),
            existingRecipe.remove()
          ]);
        } else {
          return null;
        }
      })
      // Delete was successful
      .then(function(deletedRecipe) {
        if(deletedRecipe) {
          res.status(204).send();
        } else {
            // User was not found
          res.status(404);
          res.json({message: 'Not Found'});
        }
      })
      // Address or user delete failed
      .catch(function(err) {
        res.status(400);
        res.send(err);
      });
}
