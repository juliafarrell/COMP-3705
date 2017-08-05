import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/*
 This section declares the schemas for the different documents
 that will be used for recipes
 */

// This schema represents the ingredients used in a recipe
var ingredientSchema = Schema({
  name: String
});

let reviewSchema = Schema({
  stars: Number,
  created: Date
});

// This is the main recipe schema
let recipeSchema = Schema({
  name: String,
  description: String,
  pictureURL: String,
  prepTime: Number,
  cookTime: Number,
  directions: [String],
  ingredients: [ingredientSchema],
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
  created: Date,
  lastUpdate: {type: Date, default: Date.now }
});

recipeSchema.pre('save', function(next) {
  var now = new Date();
  this.lastUpdate = now;
  if(!this.created) {
    this.created = now;
  }
  next();
});

var Recipe = mongoose.model('Recipe', recipeSchema);
var Review = mongoose.model('Review', reviewSchema);

// Export the two created models, Address and User
export {Recipe, Review};
