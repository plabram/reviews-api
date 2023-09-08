const { now } = require("mongoose")
const {Owner} = require("../models/mongo")

const {
  getAllReviewsFromDb, 
  getReviewByIdFromDb, 
  createReviewInDb,
  updateReviewInDb,
  deleteReviewFromDb
} = require("../repositories/reviews")

const getAllReviews = async (req,res)=> {
  const {filter} = req.query
  const reviews = await getAllReviewsFromDb(filter)
  res.status(200).json({data: reviews})
}

const getReviewById = async (req,res) => {
  const {id} = req.params
      const review = await getReviewByIdFromDb(id)
      res.status(200).json({data: review})
}

const createReview = async (req, res) => {
  let reviewObject = {...req.body}
  reviewObject.created = new Date
const newReview = await createReviewInDb(reviewObject)
  
const owner = await Owner.findById(req.body._owner)
owner.reviews.push(newReview)
await owner.save()

res.status(201).json({data: newReview})
}

const updateReviewById = async (req, res) => {
  const {id} = req.params
  let dateUpdate = req.body
  dateUpdate.lastUpdated = new Date
  console.log(dateUpdate)
const review = await updateReviewInDb(id, req.body)
res.status(200).json({data: review})
}

const deleteReview = async (req,res)=>{
  const {id} = req.params
   const owner = await Owner.findOne({"reviews._id": id})
    await deleteReviewFromDb(id)
    res.status(200).json({data: "Review deleted"})
owner.reviews.pull(id)
owner.save()
res.status(200).json({data: "Review removed from Owner"})
}

module.exports = {
  getAllReviews, 
  getReviewById, 
  createReview,
  updateReviewById,
  deleteReview
}