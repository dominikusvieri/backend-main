const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class PenyerahanAnak extends Model{}

PenyerahanAnak.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    nama:{
        type:DataTypes.STRING
    },
    tempat_lahir:{
        type:DataTypes.STRING
    },
    tanggal_lahir:{
        type:DataTypes.DATEONLY
    },
    alamat:{
        type:DataTypes.TEXT
    },
    no_telepon:{
        type:DataTypes.STRING
    },
    nama_ayah:{
        type:DataTypes.STRING
    },
    nama_ibu:{
        type:DataTypes.STRING
    },
    baptisan_ayah:{
        type:DataTypes.STRING
    },
    baptisan_ibu:{
        type:DataTypes.STRING
    },
    nama_wali:{
        type:DataTypes.STRING
    },
    baptisan_wali:{
        type:DataTypes.STRING
    },
},{
    sequelize,
    modelName:'PenyerahanAnak'
})

module.exports = PenyerahanAnak