'use strict';

const express = require('express');
const pg = require('pg');
const cors = require('cors');
const app = express();
const client = new pg.Client(process.env.DATABASE_URL);

client.connect();
client.on('error', err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/authenticate', (req,res) => {
  console.log("TOKEN", req.query.token, req.query.token === process.env.TOKEN );
  res.send( req.query.token === process.env.TOKEN );
});

app.get('/api/v1/tasks', (req,res) => {
  client.query( "SELECT * FROM tasks" )
  .then( results => res.send(results.rows) )
  .catch( err => {
    console.error(err);
    res.sendStatus(500).send("Error");
  });
});

app.get('/api/v1/tasks/:id', (req,res) => {
  client.query( `SELECT * FROM tasks WHERE id = $1`, [req.params.id] )
  .then( results => res.send(results.rows[0]) )
  .catch( err => {
    console.error(err);
    res.sendStatus(500).send("Error");
  });
});

app.post('/api/v1/tasks', (req, res) => {
  let insert = `INSERT INTO tasks (task, complete) VALUES($1, false)`
  let values = [req.body.task];

  client.query(insert, values)
    .then( results => res.json(results) )
    .catch( err => {
       console.error(err);
       res.sendStatus(500).send("Error");
    });
});

app.get('*', (req,res) => res.send("Access Denied"));

app.listen( process.env.PORT, () => console.log(`Server up on port ${process.env.PORT}`));