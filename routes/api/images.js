const router = require("express").Router();
const imageController = require("../../controllers/imageController");

// Matches with "/api/images.js"
router.route("/")
  .get(imageController.findAll)
  .post(imageController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(imageController.findById)
  .put(imageController.update)
  .delete(imageController.remove);

module.exports = router;

