import express from 'express';
import Room from '../models/Room';

const router = express.Router();

// GET
router.get('/', (req, res) => {
  return Room.findAll()
  .then(rooms => {
    res.json(rooms);
  });
});

// POST
router.post('/', (req, res) => {
  const { name } = req.body;
  return Room.create({
    name
  })
  .then(() => res.sendStatus(200));
});

// DELETE
router.delete('/:id', (req, res) => {
  return Room.destroy({
    where: { id: req.params.id }
  })
  .then(() => res.sendStatus(200));
});

export default router;
