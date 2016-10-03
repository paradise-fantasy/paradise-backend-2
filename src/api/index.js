import express from 'express';

import userAPI from './user';
import roomAPI from './room';
import presenceAPI from './presence';
import userActionsAPI from './user-actions';

const connect = (app) => {
  app.use('/api/users', userAPI);
  app.use('/api/rooms', roomAPI);
  app.use('/api/presence', presenceAPI);
  app.use('/api/actions', userActionsAPI);
}

export default { connect };
