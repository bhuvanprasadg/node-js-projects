const db = require("../models/index");
const { DataTypes } = require("sequelize");

const Country = db.sequelize.define(
    'country',
    {
        country_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        country:{
            type: DataTypes.TEXT,
            allowNull: false,
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

// bulkCreate() example

// Country.bulkCreate([
//     {country: 'USA', last_update:'2020-02-15 15:14:00+05:30'},
//     {country: 'UK', last_update:'2020-06-13 11:19:00+05:30'},
//     {country: 'USSR', last_update:'2021-09-12 10:44:00+05:30'},
// ]).then(() => console.log('New Countries are been updated..!'));

module.exports = Country;