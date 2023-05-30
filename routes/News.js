const express = require('express')
const router = express.Router()
const News = require('../models/News')

router.get('/', async (req, res) => {
    const news = await News.findAll()

    res.status(200).json({
        news,
        metadata: 'news data'
    })
})

router.post('/', async(req, res)=>{
    const { title, image, penulis, desc } = req.body

    const news = await News.create({
        title, image, desc, penulis
    })

    res.status(200).json({
        registered: news,
        metadata: "berhasil ditambahkan"
    })
})

module.exports = router