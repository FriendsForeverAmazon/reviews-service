const { Product } = require('../models/product.model.js');
const { Review } = require('../models/review.model.js');
const { connection } = require('../db/db');

// Create a review for a specific product ID - create works
const createReview = (req, res) => {
  const { username, is_verified, review_text, score, found_helpful, title, review_date, product_id } = req.body;
  Review.create({
    username,
    is_verified,
    review_text,
    score,
    found_helpful,
    title,
    review_date,
    product_id,
  })
    .then((newReview) => {
      res.status(200).send(newReview);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Read all reviews based on a product ID - works
const readAllReviewsByProduct = (req, res) => {
  const { productID } = req.params;
  Review.findAll({ where: { product_id: [productID] } })
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
};

// Read a review based on the review ID - works
const readReviewByID = (req, res) => {
  const { reviewID } = req.params;
  Review.findById(reviewID)
    .then((oneReview) => {
      if (oneReview) {
        res.send(oneReview);
      } else {
        res.status(404).send();
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Update a review based on a review ID - something is very wrong
const updateReview = (req, res) => {
  const { reviewID } = req.params;
  const { username, is_verified, review_text, score, found_helpful, title, review_date, product_id, productid } = req.body;
  console.log('req.params is: ', req.params);
  console.log('req.body is: ', req.body);
  Review.update({
    username,
    is_verified,
    review_text,
    score,
    found_helpful,
    title,
    review_date,
    product_id,
    productid,
  }, {
    where: { id: reviewID },
  })
    .then((updatedReview) => {
      res.status(200).send(updatedReview);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Destroy a review based on a review ID - currently works
const destroyReview = (req, res) => {
  const { reviewID } = req.params;
  Review.destroy({ where: { id: reviewID } })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
};

module.exports = {
  createReview,
  readReviewByID,
  readAllReviewsByProduct,
  updateReview,
  destroyReview,
};
