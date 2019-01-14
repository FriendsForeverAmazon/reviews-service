const Sequelize = require('sequelize');

const { connection } = require('../db/db');

const Product = connection.define('products', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

});

Product.sync();

module.exports = {
  Product,
};
