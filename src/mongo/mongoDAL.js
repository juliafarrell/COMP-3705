import {Recipe, Review, User} from 'schemas';
import mongoose from 'mongoose';
var uri = 'mongodb://localhost/comp3705-dev';


/**********
 * RECIPE *
 **********/
export function addRecipe(name, description, pictureURL, prepTime, cookTime,
                          directions, ingredients) {
  var addMe = new Recipe{
    name,
    description,
    pictureURL,
    prepTime,
    cookTime,
    directions,
    ingredients
  };
  addMe.save(function(err){
     if (err) throw err;
     console.log('New recipe added');
  })
}

export function getRecipe(){
   Recipe.find({}, function(err, result){
      if (err) throw err;
      console.log(result);
   })
}


/**********
 * REVIEW *
 **********/


/********
 * USER *
 ********/


/*******************
 * Connect and Run *
 *******************/
try {
   mongoose.connect(uri);
} catch (err){
   console.error(err);
}
console.log('connected to mongo');


