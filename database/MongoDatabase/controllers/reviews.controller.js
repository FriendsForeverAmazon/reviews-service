const { Review } = require('../models/review.model.js');
// const { Product } = require('../models/product.model.js');
// const { connection } = require('../db/db');
// const { cache } = require('../db/db.js');
// const redis = require('../../redis/redis.js');
// const redis = require('redis');

const Promise = require('bluebird');

const redis = Promise.promisifyAll(require('redis'));

const client = redis.createClient();

client.onAsync('connect', () => console.log('REDIS CONNECTED'));


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

// const readReviewByID = (req, res) => {

//   Review.find({ _id: Number(req.params.reviewID) },
//     (err, review) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       return res.status(200).send(review);
//     });
// };

// const readReviewByID = (req, res) => {
//   console.log(req.params);
//   redis.getFromCache(`/reviews/${req.pararms.reviewID}`)
//     .then((result) => {
//       if (result !== null) {
//         res.status(200).send(JSON.parse(result));
//       } else {
//         Review.find({ _id: Number(req.params.reviewID) }, (err, review) => {
//           if (err) {
//             return res.status(500).send(err);
//           }
//           redis.addToCache(`/reviews/${req.pararms.reviewID}`, JSON.stringify(review));
//           return res.status(200).send(review);
//         });
//       }
//     });
// };

const readReviewByID = (req, res) => {
  client.get(`/reviews/${req.params.reviewID}`, (err, result) => {
    if (err || result === null) {
      Review.find({ _id: Number(req.params.reviewID) }, (error, review) => {
        if (error) {
          return res.status(500).send(error);
        }
        client.set(`/reviews/${req.params.reviewID}`, JSON.stringify(review));
        return res.status(200).send(review);
      });
    } else {
      return res.status(200).send(JSON.parse(result));
    }
  });
}

// const readAllReviewsByProduct = (req, res) => {
//   // console.log(typeof req.params.product_id);
//   // const { product_id } = req.params;
//   Review.find({ product_id: Number(req.params.product_id) },
//     (err, review) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       // console.log(review);
//       return res.status(200).send(review);
//     }).limit(50);
// };

const readAllReviewsByProduct = (req, res) => {

  client.get(`/reviews/product/${req.params.product_id}`, (err, result) => {
    if (err || result === null) {
      Review.find({ product_id: Number(req.params.product_id) }, (error, review) => {
        if (error) {
          return res.status(500).send(error);
        }
        client.set(`/reviews/product/${req.params.product_id}`, JSON.stringify(review));
        return res.status(200).send(review);
      });
    } else {
      return res.status(200).send(JSON.parse(result));
    }
  });
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
