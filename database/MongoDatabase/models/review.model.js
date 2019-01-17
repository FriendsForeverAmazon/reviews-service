const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    username: { type: String, required: true },
    is_verified: { type: Boolean, required: true },
    review_text: { type: String, required: true },
    score: { type: Number, required: true },
    found_helpful: { type: Number, required: true },
    title: { type: String, required: true },
    review_date: { type: Date, required: true },
    product_id: { type: Number, required: true },
  }
);

module.exports = {
  
}