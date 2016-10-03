import express from 'express';
import User from '../models/User';
import Room from '../models/Room';

const router = express.Router();

// GET
router.get('/set-home/:roomID', (req, res) => {
  const userID = 1;
  const { roomID } = req.params;

  User.findById(userID)
  .then(user => {
    Room.findById(roomID)
    .then(room => {
      if (room !== null) {
        user.setHome(room)
        .then(() => res.sendStatus(200))
      } else {
        res.status(400).json({ error: 'No such room!' });
      }
    })
  })
});

export default router;
