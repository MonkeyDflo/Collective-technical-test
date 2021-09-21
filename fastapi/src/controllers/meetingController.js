// External Dependancies
const boom = require('boom')

// Get Data Models
const Meeting = require('../models/Meeting')

// Get all meetings
exports.getMeetings = async (req, reply) => {
  try {
    const meetings = await Meeting.find()
    return meetings
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleMeeting = async (req, reply) => {
  try {
    const id = req.params.id
    const meeting = await Meeting.findById(id)
    return meeting
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new meeting
exports.addMeeting = async (req, reply) => {
  try {
    const meeting = new Meeting(req.body)
    return meeting.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing meeting
exports.updateMeeting = async (req, reply) => {
  try {
    const id = req.params.id
    const meeting = req.body
    const { ...updateData } = meeting
    const update = await Meeting.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a meeting
exports.deleteMeeting = async (req, reply) => {
  try {
    const id = req.params.id
    const meeting = await Meeting.findByIdAndRemove(id)
    return meeting
  } catch (err) {
    throw boom.boomify(err)
  }
}
