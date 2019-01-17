const mongoose = require('mongoose');
const { user, password, database, host, port } = require('./config');

const connection = mongoose.createConnection(url);

module.exports = { connection };