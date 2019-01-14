const { product } = require('../models/product.model.js');
const { review } = require('../models/review.model.js');


// write controller for sequelize to make queries to database

const createReview = (req, res) => {
  const { username, is_verified, review_text, score, found_helpful, title, review_date } = req.body;

  review.create({
    username,
    is_verified,
    review_text,
    score,
    found_helpful,
    title,
    review_date,
  })
    .then((newReview) => {
      res.send(newReview);
    })
    .catch((err) => {
      res.send(err);
    });
};

const readReviewByID = (req, res) => {
  const { reviewID } = req.params;
  review.findById(reviewID)
    .then((oneReview) => {
      if (oneReview) {
        res.send(oneReview);
      } else {
        res.status(404).send();
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

const readReviewByName = (req, res) => {
  const { reviewName } = req.params;
  review.findOne({ where: { reviewName } })
    .then((oneReview) => {
      if (oneReview) {
        res.send(oneReview);
      } else {
        res.status(404).send();
      }
    })
    .catch((err) => {
      res.send(err);
    });
};


const updateReview = (req, res) => {
  const { reviewID } = req.params.review;
  const { username, is_verified, review_text, score, found_helpful, title, review_date } = req.body;

  review.update({
    username,
    is_verified,
    review_text,
    score,
    found_helpful,
    title,
    review_date,
  }, {
    where: { reviewID },
  })
    .then((updatedReview) => {
      res.send(updatedReview);
    })
    .catch((err) => {
      res.send(err);
    });
};


const destroyReview = (req, res) => {
  const { reviewID } = req.body;
  review.destroy({ where: { reviewID } })
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
  readReviewByName,
  updateReview,
  destroyReview,
};
