## CRUD Routes
### Postgres Routes

router.get('/:review/:query', reviewsController.readReviewByID);
router.post('/create/:review/:query', reviewsController.createReview);
router.put('/update/:review/:oldProduct/:newProduct', reviewsController.updateReview);
router.delete('/delete/:review/:query', reviewsController.destroyReview);