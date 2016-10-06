import Sequelize from 'sequelize';
import sequelize from '../sequelize';

const Room = sequelize.define('rooms', {
  name: {
    type: Sequelize.STRING
  }
}, {
  underscored: true
});

Room.sync();

export default Room;
