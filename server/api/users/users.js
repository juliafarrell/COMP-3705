
import uuidv4 from 'uuid/v4';

let users = [{
  id: 'test',
  name: 'testName',
  address: 'testAddress',
  age: 'testAge'
}];

export function listContents(req, res) {
  return res.json(users);
}

export function findOne(req, res) {
  if(users.length == 0) {
    res.status(404);
    return res.json({message: 'user array is empty'});
  }
  let me = req.params.id;
  for(var i = 0; i < users.length; i++) {
    if(users[i].id == me) {
      return res.json(users[i]);
    }
      // if not, return 404
    res.status(404);
    return res.json({message: 'Not found beach'});
  }
}

export function createUser(req, res) {
  let newUser = {
    id: uuidv4(),
    name: req.body.name,
    address: req.body.address,
    age: req.body.age
  };
  users.push(newUser);
  res.status(201);
  return res.json(newUser);
}


export function updateUser(req, res) {
  let me = req.params.id;
  for(let i = 0; i < users.length; i++) {
    if(users[i].id == me) {
      users[i].id = me;
      users[i].name = req.body.name;
      users[i].address = req.body.address;
      users[i].age = req.body.age;
      res.status(200);
      return res.json(users[i]);
    }
  }
  let newUser = {
    id: me,
    name: req.body.name,
    address: req.body.address,
    age: req.body.age
  };
  users.push(newUser);
  res.status(201);
  return res.json(newUser);
}

export function removeUser(req, res) {
  let me = req.params.id;
  for(let i = 0; i < users.length; i++) {
    if(users[i].id == me) {
      users.splice(me, 1);
      res.status(204);
      return res.json({message: 'hello?'});
    }
  }
  res.status(404);
  return res.json({message: 'Not found'});
}
