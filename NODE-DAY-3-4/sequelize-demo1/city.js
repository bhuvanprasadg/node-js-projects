const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Country = require('./country');

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

City.update({city:'Ahmed Nagar'},
        {where:{city_id:9}}
).catch(
    err => console.log(err));

Country.belongsTo(City, {foreignKey: 'country_id'});

module.exports = City;