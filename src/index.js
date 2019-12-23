let MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const URL = 'mongodb://localhost:27017'
const database = 'Practitioners'
// Connect to the database
MongoClient.connect(URL, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(database);

    client.close();
})