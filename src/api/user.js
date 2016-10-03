import express from 'express';
import User from '../models/User';

const router = express.Router();

// GET
router.get('/', (req, res) => {
  return User.findAll()
  .then(users => {
    res.json(users);
  });
});

// POST
router.post('/', (req, res) => {
  const { name, userID } = req.body;
  return User.create({
    name,
    userID
  })
  .then(() => res.sendStatus(200));
});

// DELETE
router.delete('/:id', (req, res) => {
  return User.destroy({
    where: { id: req.params.id }
  })
  .then(() => res.sendStatus(200));
});

export default router;
