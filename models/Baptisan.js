const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class Baptisan extends Model{}

Baptisan.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    foto_ktp:{
        type:DataTypes.TEXT
    },
    foto_pribadi:{
        type:DataTypes.TEXT
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
    pendidikan:{
        type:DataTypes.STRING
    },
    status_perkawinan:{
        type:DataTypes.STRING
    },
    nama_ayah_or_wali:{
        type:DataTypes.STRING
    },
    nama_ibu_or_wali:{
        type:DataTypes.STRING
    },
    alamat_ortu_or_wali:{
        type:DataTypes.STRING
    },
},{
    sequelize,
    modelName:'Baptisan'
})

module.exports = Baptisan