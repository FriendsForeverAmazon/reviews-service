const mongoose = require('mongoose');
const { connection } = require('../db/db');

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
  }
);

const Products = connection.model('Products', ProductSchema);

module.exports = {
  ProductSchema,
};

// mongoimport -d sdc -c Products --type tsv --file /Users/alexminer/Documents/GitHub/reviews-service/database/product.tsv  -f productName --numInsertionWorkers 8;