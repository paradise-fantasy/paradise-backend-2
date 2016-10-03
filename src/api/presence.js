import express from 'express';
import Presence from '../models/Presence';

const router = express.Router();

// GET
router.get('/', (req, res) => {
  return Presence.findAll()
  .then(events => {
    res.json(events);
  });
});

// POST
router.post('/', (req, res) => {
  const { userID, roomID, eventType } = req.body;
  return Presence.create({
    subjectId: userID,
    locationId: roomID,
    eventType
  })
  .then(() => res.sendStatus(200));
});

// DELETE
router.delete('/:id', (req, res) => {
  return Presence.destroy({
    where: { id: req.params.id }
  })
  .then(() => res.sendStatus(200));
});

export default router;
