const {Owner} = require("../models/mongo")

const getAllOwnersFromDb = async (filter) => {
  const titleFilterOptions = {
    name: {$regex: new RegExp(filter, "i")} 
  }
  const owners = await Owner.find(filter ? nameFilterOptions : {})
  return owners
}

const getOwnerByIdFromDb = async (id) => {
  const owner = await Owner.findById(id)
      return owner
}

const createOwnerInDb = async (payload) => {
  const newOwner = new Owner(payload)
  await newOwner.save()
  return newOwner
}

const updateOwnerInDb = async (id, payload) => {
  const owner = await Owner.findByIdAndUpdate(id, payload, {new:true})
  return owner
}

const deleteOwnerFromDb = async (id) => {
  await Owner.deleteOne({_id: id})
}

module.exports = {
  getAllOwnersFromDb,
  getOwnerByIdFromDb,
  createOwnerInDb,
  updateOwnerInDb,
  deleteOwnerFromDb
}