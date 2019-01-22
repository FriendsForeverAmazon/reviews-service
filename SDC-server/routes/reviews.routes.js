const router = require('express').Router();
const redis = require('../../database/redis/redis.js');
// Postgres Import
// const {
//   createReview,
//   readReviewByID,
//   readAllReviewsByProduct,
//   updateReview,
//   destroyReview,
// } = require('../../database/PostresDatabase/controller/reviews.controller.js');

// MongoDB Import
const {
  createReview,
  readReviewByID,
  readAllReviewsByProduct,
  updateReview,
  destroyReview,
} = require('../../database/MongoDatabase/controllers/reviews.controller.js');

// Read all reviews based on a product ID
router.get('/product/:product_id', readAllReviewsByProduct);

// Read a review based on the review ID - working
router.get('/:reviewID', readReviewByID);
// router.get('/:reviewID', async (req, res) => {
//   redis.getFromCache(`/reviews/${req.params.reviewID}`)
//     .then()
// });


// Create a review for a specific product ID - working
router.post('/', createReview);
// Update a review based on a review ID
router.patch('/:reviewID', updateReview);
// Destroy a review based on a review ID - working
router.delete('/:reviewID', destroyReview);

module.exports = router;
