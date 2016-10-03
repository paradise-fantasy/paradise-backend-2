import Sequelize from 'sequelize';
import sequelize from '../sequelize';
import User from './User';
import Room from './Room';

const Presence = sequelize.define('presence_events', {
  eventType: {
    type: Sequelize.ENUM,
    values: ['PERSON_ENTERED', 'PERSON_LEFT'],
    field: 'event_type'
  },
  time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  freezeTableName: true,
  underscored: true
});

// Relationships
Presence.belongsTo(User, { as: 'subject' });
Presence.belongsTo(Room, { as: 'location' });

// Sync
// Presence.sync({ force: true });

export default Presence;
