'use strict';

const faker = require('faker');
const pg = require('pg');

// Windows/Linux Users:
// const conString = 'postgres://USER:PASSWORD@HOST:PORT/DBNAME';

// Mac Users:
// const conString = 'postgres://localhost:5432/kilovolt';
// const client = new pg.Client(conString);

const client = new pg.Client({
  connectionString: 'postgres://ezvuivarzwkeoq:82dc26cf022ce3c0a17318c64437860374f91ecb7a883817e4fc03cf7ad88465@ec2-54-235-109-37.compute-1.amazonaws.com:5432/d3qdk6rce8e9hm',
  ssl: true,
});


let createTable = () => {
  return client.query(`
    CREATE TABLE IF NOT EXISTS people (
      article_id SERIAL PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      num_kids INTEGER NOT NULL
    );`
  )
  .then( () => console.log("Table Created") )
  .then( () => loadPeople())
  .then( () => verifyData())
  .catch( err => console.error(err) );


};

let loadPeople = () => {

  let person = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      num_kids: faker.random.number()
  };

  return client.query(`
      INSERT INTO people
        (first_name, last_name, num_kids)
      VALUES 
        ($1, $2, $3)
    `,
    [person.first_name, person.last_name, person.num_kids]
  )
  .then( () => console.log("Loaded", JSON.stringify(person)) )
  .catch( err => console.error(err) );

};

let verifyData = () => {

  return client.query(`SELECT count(*) AS count FROM people`)
  .then( result => console.log(result.rows[0].count, "Records Total") )
  .catch( err => console.error(err) );

};


client.connect()
 .then ( () => createTable() )
 .then( () => process.exit() )
 .catch( err => { console.log("ERROR", err); process.exit(); });

