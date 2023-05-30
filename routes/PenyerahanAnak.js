const express = require('express')
const router = express.Router()
const PenyerahanAnak = require('../models/PenyerahanAnak')

router.get('/', async (req, res) => {
    const penyerahanAnak = await PenyerahanAnak.findAll()

    res.status(200).json({
        penyerahanAnak,
        metadata: 'Penyerahan Anak Data'
    })
})

router.post('/', async(req, res)=>{
    const { nama, tempat_lahir, tanggal_lahir, alamat, no_telepon, nama_ayah, nama_ibu, baptisan_ayah, baptisan_ibu, nama_wali, baptisan_wali} = req.body

    const penyerahanAnak = await PenyerahanAnak.create({
        nama, tempat_lahir, tanggal_lahir, alamat, no_telepon, nama_ayah, nama_ibu, baptisan_ayah, baptisan_ibu, nama_wali, baptisan_wali
    })

    res.status(200).json({
        registered: penyerahanAnak,
        metadata: "berhasil ditambahkan"
    })
})

module.exports = router