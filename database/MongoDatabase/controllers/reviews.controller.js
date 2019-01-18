const { Review } = require('../models/review.model.js');
const { Product } = require('../models/product.model.js');
const { connection } = require('../db/db');

const createReview = (req, res) => {
  const { username, is_verified, review_text, score, found_helpful, title, review_date, product_id } = req.body;
  Review.find({

  })
};

const readReviewByID = (req, res) => {
  const { reviewID } = req.params;
  Review.findOne({ reviewID },
    {
      username: true,
      is_verified: true,
      review_text: true,
      score: true,
      found_helpful: true,
      title: true,
      review_date: true,
      product_id: true,
    },
    (err, review) => {
      if (err) {
        return res.status(200).send(err);
      }
      return res.status(200).send(review);
    });
};

const readAllReviewsByProduct = (req, res) => {
  const { productID } = req.params;
  Review.find({ productID }, (err, review) => {
    if (err) {
      return res.status(200).send(err);
    }
    return res.status(200).send(review);
  });
};

const updateReview = (req, res) => {
  const { reviewID } = req.params;
  const { username, is_verified, review_text, score, found_helpful, title, review_date, product_id, productid } = req.body;
  Review.findByIdAndUpdate(reviewID, req.body, { new: true }, (err, todo) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(todo);
  });
};

const destroyReview = (req, res) => {
  const { reviewID } = req.params;
  Review.findByIdAndRemove({ reviewID }, (err, review) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(review);
  })
};


module.exports = {
  createReview,
  readReviewByID,
  readAllReviewsByProduct,
  updateReview,
  destroyReview,
};
