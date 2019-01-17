const router = require('express').Router();
const {
  createReview,
  readReviewByID,
  readAllReviewsByProduct,
  updateReview,
  destroyReview,
} = require('../../database/PostresDatabase/controller/reviews.controller.js');

// Read all reviews based on a product ID
router.get('/product/:productID', readAllReviewsByProduct);
// Read a review based on the review ID - working
router.get('/:reviewID', readReviewByID);
// Create a review for a specific product ID - working
router.post('/', createReview);
// Update a review based on a review ID
router.patch('/:reviewID', updateReview);
// Destroy a review based on a review ID - working
router.delete('/:reviewID', destroyReview);

module.exports = router;
