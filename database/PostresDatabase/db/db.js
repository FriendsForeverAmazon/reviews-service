const Sequelize = require('sequelize');

const connection = new Sequelize('sdc', 'alexminer', null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

connection
  .authenticate()
  .then(() => {
    console.log('Connected to the database!@!#!@');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  connection,
};
