
import uuidv4 from 'uuid/v4';

let users = [];

export function listContents(req, res) {
  return res.json(users);
}

export function findOne(req, res) {
  let findThis = req.params.id;
  if(users.length == 0)
  {
    res.status(404);
    res.json({message: 'users array empty'});
  }
  for(var i = 0; i < users.length; i++) {
    if(users[i].id == findThis) {
      return res.json(users[i]);
    }
    // if not, return 404
    res.status(404);
    res.json({message: 'Not found beach'});
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
