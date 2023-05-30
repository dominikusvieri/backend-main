const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class PendaftaranEvent extends Model{}

PendaftaranEvent.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    },
    nomor_telepon:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    event:{
        type:DataTypes.STRING
    },
},{
    sequelize,
    modelName:'PendaftaranEvent'
})

module.exports = PendaftaranEvent