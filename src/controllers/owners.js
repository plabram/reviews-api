const { now } = require("mongoose")
const {
  getAllOwnersFromDb, 
  getOwnerByIdFromDb, 
  createOwnerInDb,
  updateOwnerInDb,
  deleteOwnerFromDb
} = require("../repositories/owners")
const { Review, Owner } = require("../models/mongo")

const getAllOwners = async (req,res)=> {
  const {filter} = req.query
  const owners = await getAllOwnersFromDb(filter)
  res.status(200).json({data: owners})
}

const getOwnerById = async (req,res) => {
  const {id} = req.params
      const owner = await getOwnerByIdFromDb(id)
      res.status(200).json({data: owner})
}

const createOwner = async (req, res) => {
  let ownerObject = {...req.body}
  ownerObject.created = new Date
const newOwner = await createOwnerInDb(ownerObject)
  res.status(201).json({data: newOwner})
}

const updateOwnerById = async (req, res) => {
  const {id} = req.params
  let dateUpdate = req.body
  dateUpdate.lastUpdated = new Date
  console.log(dateUpdate)
const owner = await updateOwnerInDb(id, req.body)
res.status(200).json({data: owner})
}

const deleteOwner = async (req,res)=>{
  const {id} = req.params
  const deletedReviews = await Review.deleteMany({_owner: id})
  console.log(`deleting reviews ${deletedReviews} associated with owner ${id}`)
  await deleteOwnerFromDb(id)
  res.status(200).json({data: "Owner and associated reviews deleted"})
  }

module.exports = {
  getAllOwners, 
  getOwnerById, 
  createOwner,
  updateOwnerById,
  deleteOwner
}