const express = require('express');
const router = express.Router();
const questionController = require("../controllers/question");
// const routesValidator = require("../validators/route-validators");

// router.post("/:id", questionController.updateOwnProfile);
router.post("/add", questionController.addQuestion);
router.get("/search", questionController.searchQuestion);

module.exports = router;
