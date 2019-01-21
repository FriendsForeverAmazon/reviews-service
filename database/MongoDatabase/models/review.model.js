const mongoose = require('mongoose');
const reviewAutoIncrement = require('mongoose-auto-increment');
const { connection } = require('../db/db');

const ReviewSchema = new mongoose.Schema(
  {
    // review_id: { type: Number, require: true },
    username: { type: String, required: true },
    is_verified: { type: Boolean, required: true },
    review_text: { type: String, required: true },
    score: { type: Number, required: true },
    found_helpful: { type: Number, required: true },
    title: { type: String, required: true },
    review_date: { type: Date, required: true },
    // product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    product_id: { type: Number, require: true },
  }
);

reviewAutoIncrement.initialize(connection);
ReviewSchema.plugin(reviewAutoIncrement.plugin, {
  model: 'Review',
  field: '_id',
  startAt: 1,
  incrementBy: 1,
});

// I am a bit confident that this needs to be 'Review'
const Review = connection.model('Review', ReviewSchema);

module.exports = {
  Review,
};


// mongoimport --db sdc --collection reviews --type tsv --file /Users/alexminer/Documents/GitHub/reviews-service/database/review.tsv --fields username,is_verified,review_text,score,found_helpful,title,review_date,product_id,createdAt,updatedAt --numInsertionWorkers 8;

// mongoimport --db sdc --collection reviews --type tsv --file /Users/alexminer/Documents/GitHub/reviews-service/database/data/review234234.tsv --fields username,is_verified,review_text,score,found_helpful,title,review_date,product_id,createdAt,updatedAt --numInsertionWorkers 8;
