import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/*
 This section declares the schemas for the different documents
 that will be used for users
 */

// This schema represents the address of the user
let addressSchema = Schema({
  addressLine1: {type: String, required: true},
  addressLine2: {type: String, required: false},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zip: {type: Number, required: true}
});

// This schema represents the name of the user
let nameSchema = Schema({
  firstName: {type: String, required: true},
  middleName: {type: String, required: false},
  lastName: {type: String, required: true}
});

// This is the main user schema
let userSchema = Schema({
  age: {type: Number, required: true},
   /* mongoose equivalent of foreign key */
  address: {type: Schema.Types.ObjectId, ref: 'Address'},
  name: nameSchema,
  created: Date,
  lastUpdate: Date
});

userSchema.pre('save', function(next) {
  var now = new Date();
  this.lastUpdate = now;
  if(!this.created) {
    this.created = now;
  }
  next();
});


let Address = mongoose.model('Address', addressSchema);
let User = mongoose.model('User', userSchema);

// Export the two created models, Address and User
export {Address, User};
