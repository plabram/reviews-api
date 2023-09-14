const { now } = require("mongoose")
const {
  getAllOwnersFromDb, 
  getOwnerByIdFromDb, 
  createOwnerInDb,
  updateOwnerInDb,
  deleteOwnerFromDb
} = require("../repositories/owners")
const {
  deleteReviewFromDb,
  deleteAllReviewsFromDb
} = require("../repositories/reviews")
const { Review } = require("../models/mongo")
const {setError} = require("../config/error")

const getAllOwners = async (req,res,next)=> {
try
  {const {filter} = req.query
  const owners = await getAllOwnersFromDb(filter)
  res.status(200).json({data: owners})}
  catch {
    return next(setError(400, "Can't find owners"))
  }
}

const getOwnerById = async (req,res,next) => {
  try
  {const {id} = req.params
      const owner = await getOwnerByIdFromDb(id)
      res.status(200).json({data: owner})}
      catch {
        return next(setError(400, "Can't find owner"))
      }
}

const createOwner = async (req, res,next) => {
try
  {const ownerObject = {...req.body}
const newOwner = await createOwnerInDb(ownerObject)
  res.status(201).json({data: newOwner})}
  catch {
    return next(setError(400, "Can't create owner"))
  }
}

const updateOwnerById = async (req, res,next) => {
  try {const {id} = req.params
const owner = await updateOwnerInDb(id, req.body)
res.status(200).json({data: owner})}
catch {
  return next(setError(400, "Can't update owner"))
}
}

const addReview = async (req, res,next) => {
  try
  {const id = req.params.id
  const newReview = new Review({
    stars: req.body.stars,
    title: req.body.title,
    text: req.body.text,
    _owner: id
  })
  await newReview.save()
  let owner = await getOwnerByIdFromDb(id)
owner.reviews.push(newReview)
const updatedOwner = await updateOwnerInDb(id, owner)
  res.status(201).json(newReview)
  console.log(`New review ${newReview._id} added to owner ${updatedOwner._id}`)}
  catch {
    return next(setError(400, "Can't add review"))
  }
}

const deleteOwner = async (req,res,next)=>{
  try
  {const {id} = req.params
  // const deletedReviews = await Review.deleteMany({_owner: id})
  await deleteAllReviewsFromDb(id)
  await deleteOwnerFromDb(id)
  res.status(200).json({data: "Owner and associated reviews deleted"})}
  catch {
    return next(setError(400, "Can't delete owner"))
  }
  }

  const deleteReview = async (req,res,next)=>{
    try
    {const {id} = req.params
    const {reviewid} = req.params
    let owner = await getOwnerByIdFromDb(id)
    owner.reviews.pull(reviewid)
    await updateOwnerInDb(id, owner)
    await deleteReviewFromDb(reviewid)
    res.status(200).json({data: "Review deleted from owner and reviews table"})}
 catch {
  return next(setError(400, "Can't delete review"))
 }
  }

module.exports = {
  getAllOwners, 
  getOwnerById, 
  createOwner,
  updateOwnerById,
  addReview,
  deleteOwner,
  deleteReview
}