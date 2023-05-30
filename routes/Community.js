const express = require('express')
const router = express.Router()
const Community = require('../models/Community')

router.get('/', async (req, res) => {
    const community = await Community.findAll()

    res.status(200).json({
        community,
        metadata: 'community data'
    })
})

router.post('/', async (req, res) => {
    const { ketua, visi_misi, komsel_date, alamat, contact_person, name_of_contact_person } = req.body

    const community = await Community.create({
        ketua, visi_misi, komsel_date, alamat, contact_person, name_of_contact_person
    })

    res.status(200).json({
        registered: community,
        metadata: "berhasil ditambahkan"
    })
})

module.exports = router