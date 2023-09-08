const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    stars: Number,
    title: String,
    text: String,
    _owner: 
    {type: mongoose.Schema.Types.ObjectId, 
      ref: "Owner"}
})

const embeddedReviewSchema = new mongoose.Schema({
  stars: Number,
  title: String
})

const ownerSchema = new mongoose.Schema({
  name: String,
  bio: String,
  reviews: [embeddedReviewSchema]
})

const Owner = mongoose.model("Owner", ownerSchema)

const Review = mongoose.model("Review", reviewSchema)

module.exports = {
  Owner, Review
}