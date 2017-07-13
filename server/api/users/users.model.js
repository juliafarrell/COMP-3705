import uuidv4 from 'uuid/v4';

class User {
  users = [];

  find() {
    // Returns a list of all users
    return this.users;
  }

  findById(userId) {
    // Find user by Id
    // Returns user, or null if not present
    if(this.users.length == 0) return null;
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].id == userId) return this.users[i];
    }
    return null;
  }

  create(user) {
    // Create a new user
    // Return created user
    //* Generate the id and overwrite any id that may be present in user
    let newUser = {
      id: uuidv4(),
      name: user.name,
      address: user.address,
      age: user.age
    };
    this.users.push(newUser);
    return newUser;
  }

  findOneAndUpdate(user) {
    // Find user and update
    // If user does not exist, create it using Id provided
    // Return true if user was updated, false if user was created
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].id == user.id) {
        this.users[i].name = user.name;
        this.users[i].address = user.address;
        this.users[i].age = user.age;
        return true;
      }
    }
    this.users.push(user);
    return false;
  }

  remove(userId) {
    // Remove user if exists with the Id provided
    // Return true if removed
    // Return false if did user not exist
    let index = -1;
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].id == userId) {
        index = i;
      }
    }
    if(index != -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default new User();
