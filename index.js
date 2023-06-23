const express = require('express')
const cors = require('cors')
const port = 3200
const bodyParser = require('body-parser')
const app = express()

//router
const news = require('./routes/News')
const event = require('./routes/Event')
const pendaftaranEvent = require('./routes/PendaftaranEvent')
const community = require('./routes/Community')
const penyerahanAnak = require('./routes/PenyerahanAnak')
const baptisan = require('./routes/Baptisan')
const pernikahan = require('./routes/Pernikahan')

const sequelize = require('./db.config')
sequelize.sync().then(()=> console.log("database ready"))

app.use(express.urlencoded({limit:'50mb'}))
app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}))

app.use(express.json({limit: '50mb'}))
// app.use(express.json())
app.use(cors())



app.use('/news', news)
app.use('/event', event)
app.use('/daftarevent', pendaftaranEvent)
app.use('/komunitas', community)
app.use('/penyerahananak', penyerahanAnak)
app.use('/baptisan', baptisan)
app.use('/pernikahan', pernikahan)



app.listen(port, console.log(`running server on port ${port}`))