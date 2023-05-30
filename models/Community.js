const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class Community extends Model{}

Community.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    ketua:{
        type:DataTypes.STRING
    },
    visi_misi:{
        type:DataTypes.STRING
    },
    komsel_date:{
        type:DataTypes.DATEONLY
    },
    alamat:{
        type:DataTypes.TEXT
    },
    contact_person:{
        type:DataTypes.STRING
    },
    name_of_contact_person:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    modelName:'Community'
})

module.exports = Community