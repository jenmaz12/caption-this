const router = require('express').Router();
const imageController = require('../../controllers/imageController');

// Matches with "/api/image"
router
  .route('/image')
  .get(imageController.findAll)
  .post(imageController.create);

// Matches with "/api/books/:id"
router
  .route('/image/:id')
  .get(imageController.findById)
  .put(imageController.update)
  .delete(imageController.remove);

module.exports = router;
