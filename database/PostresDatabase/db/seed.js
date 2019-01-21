// this file will take the .csv and import it into the db
const sequelize = require('sequelize');
const { connection } = require('./db.js');
const { product } = require('../models/product.model.js');
const { review } = require('../models/review.model.js');


connection.query(
  `COPY products("productName","createdAt","updatedAt") from '/Users/alexminer/Documents/GitHub/reviews-service/database/product.tsv' DELIMITER E'\t'`
);

connection.query(
  `COPY reviews("username", "is_verified", "review_text", "score", "found_helpful", "title", "review_date", "product_id", "createdAt", "updatedAt") from '/Users/alexminer/Documents/GitHub/reviews-service/database/review.tsv' DELIMITER E'\t'`
);


// this script doesn't work from this file, I have to copy this into postgres to get it to insert from the sdc db directly