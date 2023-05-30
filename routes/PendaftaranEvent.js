const express = require('express')
const router = express.Router()
const PendaftaranEvent = require('../models/PendaftaranEvent')

router.get('/', async (req, res) => {
    const pendaftaranevent = await PendaftaranEvent.findAll()

    res.status(200).json({
        pendaftaranevent,
        metadata: 'pendaftaran event data'
    })
})

router.post('/', async(req, res)=>{
    const { name, nomor_telepon, email, event } = req.body

    const pendaftaranevent = await PendaftaranEvent.create({
        name, nomor_telepon, email, event
    })

    res.status(200).json({
        registered: pendaftaranevent,
        metadata: "berhasil ditambahkan"
    })
})

module.exports = router