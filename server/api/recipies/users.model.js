import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/*
 This section declares the schemas for the different documents
 that will be used
 */

// This schema represents the address of the recipe
let ingredientSchema = Schema({
  ingredient: String,
  amount: String
});

let reviewSchema = Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'},
  description: String,
  numStars: Number,
  created: Date
});

// This is the main user schema
let recipeSchema = Schema({
  name: {type: String, required: true},
  description: String,
  pictureURL: String,
  prepTime: Number,
  cookTime: Number,
  directions: [String],
  ingredients: [ingredientSchema],
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});

/*
 This section creates interactive models from the defined schemas
 above so that you can perform Create Read Update and Delete (CRUD)
 operations against the schemas.
 NOTE since the nameSchema is embedded within userSchema, it does NOT have
 to be created as a model!
 */
let Recipe = mongoose.model('Recipe', recipeSchema);
let Review = mongoose.model('Review', reviewSchema);

// Export the two created models, Address and User
export {Recipe, Review};
