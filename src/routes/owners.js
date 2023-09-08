const express = require("express")
const { 
  getAllOwners, 
  getOwnerById, 
  createOwner, 
  updateOwnerById,
deleteOwner } = require("../controllers/owners")

const router = express.Router()
router.get("/", getAllOwners)
router.get("/:id", getOwnerById)
router.post("/", createOwner)
router.put("/:id", updateOwnerById)
router.delete("/:id", deleteOwner)

module.exports = router