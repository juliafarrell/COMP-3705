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
  user: {type: Schema.Types.ObjectId, ref: 'Users'},
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
  reviews: [reviewSchema]
});


let Recipes = mongoose.model('Recipes', recipeSchema);

// Export the two created models, Address and User
export {Recipes};
