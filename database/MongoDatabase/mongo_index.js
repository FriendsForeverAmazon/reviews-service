const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST || 'localhost';
// mongoose.connect(`mongodb://${DB_HOST}:27017/sdc`);
mongoose.connect('mongodb://localhost/products');

const db = mongoose.connection;

const productSchema = new mongoose.Schema({
  productName: String,
  reviews: [{
    username: String,
    is_verified: Number,
    review_text: String,
    score: Number,
    found_helpful: Number,
    title: String,
    review_data: Date,
  }],

});

const addReview;

const getReviews;

const updateReview;

const deleteReviews = (productID, callback) => {
  
};