const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    stars: {type: Number, required: true},
    title: {type: String, required: true},
    text: {type: String, required: false},
    _owner: 
    {type: mongoose.Schema.Types.ObjectId, 
      ref: "Owner"}
})

// const embeddedReviewSchema = new mongoose.Schema({
//   stars: {type: Number, required: true},
//   title: {type: String, required: true}
// })

const ownerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  bio: {type: String, required: false},
  reviews: [reviewSchema]
})

const Owner = mongoose.model("Owner", ownerSchema)

const Review = mongoose.model("Review", reviewSchema)

module.exports = {
  Owner, Review
}