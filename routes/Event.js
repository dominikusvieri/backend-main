const express = require('express')
const router = express.Router()
const Event = require('../models/Event')

router.get('/', async (req, res) => {
    const event = await Event.findAll()

    res.status(200).json({
        event,
        metadata: 'event data'
    })
})

router.post('/', async(req, res)=>{
    const { title, image, venue, desc, registration_date, schedule, contact_person, name_of_contact_person } = req.body

    const event = await Event.create({
        title, image, venue, desc, registration_date, schedule, contact_person, name_of_contact_person
    })

    res.status(200).json({
        registered: event,
        metadata: "berhasil ditambahkan"
    })
})

module.exports = router