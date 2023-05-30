const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('menu','root','',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize