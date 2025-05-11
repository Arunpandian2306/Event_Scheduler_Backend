const express = require('express');
const EventManager = require('../Service/EventManager');
var router = express.Router();
const { sendSuccess, sendError } = require('../Service/ResponseModule')



const eventManager = new EventManager();

router.post('/add-event', (req, res) => {
    const { date, startHour, endHour } = req.body;
    if (
        !date ||
        startHour >= endHour ||
        startHour < 0 ||
        endHour > 24
    ) {
        sendError(res, 'Invalid input');
    }

    const success = eventManager.addEvent(date, startHour, endHour);

    if (success) {
        sendSuccess(res, 'Event added successfully');
    } else {
        sendError(res, 'Event overlaps with existing events on this date');
    }
});


router.get('/events', (req, res) => {
    try {
        const events = eventManager.getEvents();
        sendSuccess(res, events);
    } catch (error) {
        sendError(res, 'Error retrieving events');
    }
});

router.delete('/delete-event', (req, res) => {
    const { date, startHour, endHour } = req.body;
    if (!date || startHour == null || endHour == null) {
        return sendError(res, 'Invalid input for deletion');
    }

    const success = eventManager.deleteEvent(date, startHour, endHour);

    if (success) {
        sendSuccess(res, 'Event deleted successfully');
    } else {
        sendError(res, 'Event not found');
    }
});


module.exports = router;
