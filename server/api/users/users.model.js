import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/*
 This section declares the schemas for the different documents
 that will be used
 */


// This schema represents the name of the user
let nameSchema = Schema({
  firstName: {type: String, required: true},
  middleName: {type: String, required: false},
  lastName: {type: String, required: true}
});

// This is the main user schema
let userSchema = Schema({
  name: nameSchema,
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true}
});

let User = mongoose.model('User', userSchema);

// Export the created User model
export {User};
