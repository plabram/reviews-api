const express = require("express")
const { 
  getAllOwners, 
  getOwnerById, 
  createOwner, 
  updateOwnerById,
  addReview,
deleteOwner,
deleteReview } = require("../controllers/owners")

const router = express.Router()
router.get("/", getAllOwners)
router.get("/:id", getOwnerById)
router.post("/", createOwner)
router.put("/:id", updateOwnerById)
router.put("/:id/reviews", addReview)
router.delete("/:id", deleteOwner)
router.delete("/:id/reviews/:reviewid", deleteReview)

module.exports = router