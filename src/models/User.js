import Sequelize from 'sequelize';
import sequelize from '../sequelize';
import Room from './Room';

const User = sequelize.define('users', {
  name: {
    type: Sequelize.STRING
  },
  userID: {
    type: Sequelize.STRING,
    field: 'user_id'
  }
}, {
  underscored: true
});

// Relationships
User.belongsTo(Room, { as: 'home' });

// Sync
User.sync({ force: true });

export default User;
