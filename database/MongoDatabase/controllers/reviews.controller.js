const { Review } = require('../models/review.model.js');
// const { Product } = require('../models/product.model.js');
// const { connection } = require('../db/db');
// var { cache } = require('../db/db.js');

const createReview = (req, res) => {
  const { username, is_verified, review_text, score, found_helpful, title, review_date, product_id } = req.body;
  const newReview = new Review({
    username,
    is_verified,
    review_text,
    score,
    found_helpful,
    title,
    review_date,
    product_id,
  });
  newReview.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(newReview);
  });
};

const readReviewByID = (req, res) => {
  Review.find({ _id: Number(req.params.reviewID) },
    (err, review) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(review);
    });
};

const readAllReviewsByProduct = (req, res) => {
  console.log(typeof req.params.product_id);
  // const { product_id } = req.params;
  Review.find({ product_id: Number(req.params.product_id) },
    (err, review) => {
      if (err) {
        return res.status(500).send(err);
      }
      console.log(review);
      return res.status(200).send(review);
    }).limit(5);
  // Review.find({ product_id })
  //   .then((review) => {
  //     console.log('hi');
  //     return res.status(200).send(review);
  //   })
  //   .catch((err) => {
  //     return res.status(500).send(err);
  //   });
};

const updateReview = (req, res) => {
  const { reviewID } = req.params;
  const { username, is_verified, review_text, score, found_helpful, title, review_date, product_id, productid } = req.body;
  Review.findByIdAndUpdate(Number(reviewID), req.body, { new: true }, (err, todo) => {
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
  });
};

module.exports = {
  createReview,
  readReviewByID,
  readAllReviewsByProduct,
  updateReview,
  destroyReview,
};
