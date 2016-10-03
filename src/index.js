/** HAS TO HAPPEN FIRST **/
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import api from './api';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect API
api.connect(app);

app.listen(3000, () => console.log('Listening to port 3000'))
