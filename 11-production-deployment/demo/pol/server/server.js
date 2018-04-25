'use strict';

const cors = require('cors');
const pg = require('pg');
const express = require('express');
const app = express();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());

app.get('/', (req, res) => res.send('my api is great'));

app.get('/api/v1/tasks', (req, res) => {
  client.query(`SELECT * from books;`)
  .then(results => res.send(results.rows))
  .catch(console.error);
});

app.get('*', (req, res) => res.send('Access Denied');

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


