const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class News extends Model{}

News.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    },
    penulis:{
        type:DataTypes.STRING
    },
    desc:{
        type:DataTypes.TEXT
    }
},{
    sequelize,
    modelName:'News'
})

module.exports = News