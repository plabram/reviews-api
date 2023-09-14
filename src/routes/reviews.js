const express = require("express")
const { 
  getAllReviews, 
  getReviewById, 
  createReview, 
  updateReviewById,
deleteReview } = require("../controllers/reviews")

const router = express.Router()
router.get("/", getAllReviews)
router.get("/:id", getReviewById)
router.put("/:id", updateReviewById)

// ALTERNATIVE REVIEW POST AND DELETE METHODS - LEAVE FOR REFERENCE
// router.post("/", createReview)
// router.delete("/:id", deleteReview)

module.exports = router