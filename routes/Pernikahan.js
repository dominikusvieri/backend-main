const express = require('express')
const router = express.Router()
const Pernikahan = require('../models/Pernikahan')

router.get('/', async (req, res) => {
    const pernikahan = await Pernikahan.findAll()

    res.status(200).json({
        pernikahan,
        metadata: 'Pernikahan Data'
    })
})

router.post('/', async (req, res) => {
    const {
        nama_pria,
        tempat_lahir_pria,
        tanggal_lahir_pria,
        alamat_pria,
        no_telepon_pria,
        kewarganegaraan_pria,
        kpk_wilayah_pria,
        foto_ttd_pria,
        nama_wanita,
        tempat_lahir_wanita,
        tanggal_lahir_wanita,
        alamat_wanita,
        no_telepon_wanita,
        kewarganegaraan_wanita,
        kpk_wilayah_wanita,
        foto_ttd_wanita
    } = req.body

    const pernikahan = await Pernikahan.create({
        nama_pria,
        tempat_lahir_pria,
        tanggal_lahir_pria,
        alamat_pria,
        no_telepon_pria,
        kewarganegaraan_pria,
        kpk_wilayah_pria,
        foto_ttd_pria,
        nama_wanita,
        tempat_lahir_wanita,
        tanggal_lahir_wanita,
        alamat_wanita,
        no_telepon_wanita,
        kewarganegaraan_wanita,
        kpk_wilayah_wanita,
        foto_ttd_wanita
    })

    res.status(200).json({
        registered: pernikahan,
        metadata:'Berhasil ditambahkan '
    })
})

module.exports = router