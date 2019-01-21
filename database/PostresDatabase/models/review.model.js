const Sequelize = require('sequelize');

const { connection } = require('../db/db');
const { Product } = require('./product.model');

const Review = connection.define('reviews', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  review_text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  found_helpful: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  review_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Review.belongsTo(Product);
// look up to see if it is creating new column in reviews table

Review.sync();

module.exports = {
  Review,
};
