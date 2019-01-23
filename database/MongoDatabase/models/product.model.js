const mongoose = require('mongoose');
// const productAutoIncrement = require('mongoose-auto-increment');
const { connection } = require('../db/db');

// productAutoIncrement.initialize(connection);

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
  }
);

// ProductSchema.plugin(productAutoIncrement.plugin, {
//   model: 'Product',
//   field: '_id',
//   startAt: 1,
//   incrementBy: 1,
// });

const Product = connection.model('Product', ProductSchema);

module.exports = {
  Product,
};

// mongoimport -d sdc -c Products --type tsv --file /Users/alexminer/Documents/GitHub/reviews-service/database/product.tsv  -f productName --numInsertionWorkers 8;