import User from './users.model';

export function index(req, res) {
  return res.json(User.find());
}

export function show(req, res) {
  let me = User.findById(req.params.id);
  if(me !== null) {
    res.status(200);
    return res.json(me);
  }
  res.status(404);
  return res.json({message: 'User not found dood sry'});
}

export function create(req, res) {
  let newUser = {
    name: req.body.name,
    address: req.body.address,
    age: req.body.age
  };
  let hanna = User.create(newUser);
  res.status(201);
  return res.json(hanna);
}


export function upsert(req, res) {
  let newUser = {
    id: req.params.id,
    name: req.body.name,
    address: req.body.address,
    age: req.body.age
  };
  let changed = User.findOneAndUpdate(newUser);
  if(changed) {
    res.status(200);
    return res.json(newUser);
  }
  res.status(201);
  return res.json({message: 'created new user', newUser});
}

export function destroy(req, res) {
  let deleted = User.remove(req.params.id);
  if(deleted) {
    res.status(204).send();
  }
  res.status(404);
  return res.json({message: 'Not found'});
}
