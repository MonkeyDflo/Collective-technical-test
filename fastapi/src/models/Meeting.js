// External Dependancies
const mongoose = require('mongoose')

const MeetingSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    day: { type: String, required: true },
    startHour: { type: String, required: true },
    endHour: { type: String, required: true },
    zoomLink: { type: String, required: true },
})

module.exports = mongoose.model('Meeting', MeetingSchema)