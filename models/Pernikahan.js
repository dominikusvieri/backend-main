const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class Pernikahan extends Model{}

Pernikahan.init({
    nama_pria:{
        type:DataTypes.STRING
    },
    tempat_lahir_pria:{
        type:DataTypes.STRING
    },
    tanggal_lahir_pria:{
        type:DataTypes.DATEONLY
    },
    alamat_pria:{
        type:DataTypes.STRING
    },
    kewarganegaraan_pria:{
        type:DataTypes.STRING
    },
    kpk_wilayah_pria:{
        type:DataTypes.STRING
    },
    nama_wanita:{
        type:DataTypes.STRING
    },
    tempat_lahir_wanita:{
        type:DataTypes.STRING
    },
    tanggal_lahir_wanita:{
        type:DataTypes.DATEONLY
    },
    alamat_wanita:{
        type:DataTypes.STRING
    },
    kewarganegaraan_wanita:{
        type:DataTypes.STRING
    },
    kpk_wilayah_wanita:{
        type:DataTypes.STRING
    },
},{
    sequelize,
    modelName:'Pernikahan'
})

module.exports = Pernikahan