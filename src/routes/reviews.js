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
router.post("/", createReview)
router.put("/:id", updateReviewById)
router.delete("/:id", deleteReview)

module.exports = router