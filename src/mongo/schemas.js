/**
 * Created by juliafarrell on 8/1/17.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;


var ingredientSchema = new Schema({
  name: String
});

var recipeSchema = new Schema({
  name: String,
  description: String,
  pictureURL: String,
  prepTime: Number,
  cookTime: Number,
  directions: [String],
  ingredients: [ingredientSchema],
  reviews: [ObjectId],
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

var reviewSchema = new Schema({
  description: String,
  stars: Number,
  created: Date,
  lastUpdate: { type: Date, default: Date.now },
  fromUser: ObjectId
});
reviewSchema.pre('save', function(next) {
  var now = new Date();
  this.lastUpdate = now;
  if(!this.created) {
    this.created = now;
  }
  next();
});
var Review = mongoose.model('Review', reviewSchema);

var userSchema = new Schema({
  name: {
    firstName: String,
    lastName: String
  },
  username: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true},
  created: Date,
  lastUpdate: { type: Date, default: Date.now }
});
userSchema.pre('save', function(next) {
  var now = new Date();
  this.lastUpdate = now;
  if(!this.created) {
    this.created = now;
  }
  next();
});
var User = mongoose.model('User', userSchema);


export {Recipe, Review, User};
