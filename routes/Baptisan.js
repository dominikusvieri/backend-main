const express = require('express')
const router = express.Router()
const Baptisan = require('../models/Baptisan')

router.get('/', async (req, res) => {
    const baptisan = await Baptisan.findAll()

    res.status(200).json({
        baptisan,
        metadata: 'baptisan Data'
    })
})

router.post('/', async (req, res) => {
    const { foto_ktp, foto_pribadi, nama, tempat_lahir, tanggal_lahir, alamat, nama_ibu, pendidikan, status_perkawinan, nama_ayah_or_wali, nama_ibu_or_wali, alamat_ortu_or_wali } = req.body

    const baptisan = await Baptisan.create({
        foto_ktp, foto_pribadi, nama, tempat_lahir, tanggal_lahir, alamat, nama_ibu, pendidikan, status_perkawinan, nama_ayah_or_wali, nama_ibu_or_wali, alamat_ortu_or_wali
    })

    res.status(200).json({
        registered: baptisan,
        metadata: "berhasil ditambahkan"
    })
})

module.exports = router