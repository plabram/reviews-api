const {Review} = require("../models/mongo")

const getAllReviewsFromDb = async (filter) => {
  const titleFilterOptions = {
    name: {$regex: new RegExp(filter, "i")} 
  }
  const reviews = await Review.find(filter ? nameFilterOptions : {})
  return reviews
}

const getReviewByIdFromDb = async (id) => {
  const review = await Review.findById(id)
      return review
}

// RELATED TO ALTERNATIVE REVIEW CREATION METHOD - LEAVE FOR REFERENCE
// const createReviewInDb = async (payload) => {
//   const newReview = new Review(payload)
//   await newReview.save()
//   await newReview.populate("_owner")
//   return newReview
// }

const updateReviewInDb = async (id, payload) => {
  const review = await Review.findByIdAndUpdate(id, payload, {new:true})
  return review
}

const deleteReviewFromDb = async (id) => {
  await Review.deleteOne({_id: id})
}

const deleteAllReviewsFromDb = async (ownerid) => {
  await Review.deleteMany({_owner: ownerid})
}

module.exports = {
  getAllReviewsFromDb,
  getReviewByIdFromDb,
  // createReviewInDb,
  updateReviewInDb,
  deleteReviewFromDb,
  deleteAllReviewsFromDb
}