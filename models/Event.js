const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class Event extends Model{}

Event.init({
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
    registration_date:{
        type:DataTypes.DATEONLY
    },
    schedule:{
        type:DataTypes.DATEONLY
    },
    venue:{
        type:DataTypes.STRING
    },
    desc:{
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
    modelName:'Event'
})

module.exports = Event