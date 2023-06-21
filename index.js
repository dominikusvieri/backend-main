const express = require('express')
const cors = require('cors')
const port = 3200

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

const app = express()
app.use(cors())
app.use(express.json())

app.use('/news', news)
app.use('/event', event)
app.use('/daftarevent', pendaftaranEvent)
app.use('/komunitas', community)
app.use('/penyerahananak', penyerahanAnak)
app.use('/baptisan', baptisan)
app.use('/pernikahan', pernikahan)

app.listen(port, console.log(`running server on port ${port}`))