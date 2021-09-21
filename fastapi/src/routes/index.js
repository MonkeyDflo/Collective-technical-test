// Import our Controllers
const meetingController = require('../controllers/meetingController')
const documentation = require('../models/Meeting')

const routes = [
  {
    method: 'GET',
    url: '/api/meetings',
    handler: meetingController.getMeetings
  },
  {
    method: 'GET',
    url: '/api/meetings/:id',
    handler: meetingController.getSingleMeeting
  },
  {
    method: 'POST',
    url: '/api/meetings',
    handler: meetingController.addMeeting,
    schema: documentation.addMeetingSchema
  },
  {
    method: 'PUT',
    url: '/api/meetings/:id',
    handler: meetingController.updateMeeting
  },
  {
    method: 'DELETE',
    url: '/api/meetings/:id',
    handler: meetingController.deleteMeeting
  }
]

module.exports = routes