const express = require('express');
const app = express();

// basic auth, not needed yet
/*
const bodyParser = require('body-parser');

const basicAuth = require('express-basic-auth');

app.use(basicAuth({
    users: { admin: 'admin' },
    challenge: true // <--- needed to actually show the login dialog!
  }));
*/

app.get('/collections', (req, res) => {
  const MongoClient = require("mongodb").MongoClient;
  const uri = 'mongodb://admin:admin@guaca_mongodb:27017';
  const client = new MongoClient(uri, { useUnifiedTopology: true }); // { useUnifiedTopology: true } removes connection warnings;

  const dbName = "user_registration";
  console.log("Opening connection");
  client
        .connect()
        .then(
          client =>
            client
              .db(dbName)
              .listCollections()
              .toArray() // Returns a promise that will resolve to the list of the collections
        )
        .then(cols => res.send (cols))
        .finally(() => client.close());
  })
  console.log("Closing connection");

// Require the Routes API
// Create a Server and run it on the port 3000
const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 3000
})
