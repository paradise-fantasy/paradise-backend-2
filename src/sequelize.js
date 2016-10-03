import Sequelize from 'sequelize';
import config from './config';
const { database, username, password, host } = config.postgres;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

export default sequelize;
