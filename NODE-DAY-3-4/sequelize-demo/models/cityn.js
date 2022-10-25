const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Country = require('./countryn');

const City = db.sequelize.define(
    'city',{
        city:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        country_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        city_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        last_update:{
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

Country.hasMany(City,{
    foreignKey:'country_id'
});

// City for update..

// City.update({city:'Ahmed Nagar'},
//         {where:{city_id:9}}
// ).catch(
//     err => console.log(err));

module.exports = City;