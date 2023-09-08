const express = require("express")
const ownerRouter = require("./owners")
const reviewRouter = require("./reviews")

const router = express.Router()

router.use("/owners", ownerRouter)
router.use("/reviews", reviewRouter)

module.exports = router


