const mongoose = require('mongoose');
const Redis = require('ioredis');
const url = "mongodb://localhost:27017/sdc";

const connection = mongoose.createConnection(url);
// const cache = new Redis();
connection.on('error', console.error.bind(console, 'MONGO connection error:'));
connection.once('open', () => {
  console.log('+++ Connected to MongoDB!@!@!@!@');
});

// module.exports = { connection, cache };

module.exports = { connection };
