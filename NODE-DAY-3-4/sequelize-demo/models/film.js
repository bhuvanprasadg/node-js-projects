const db = require("./index");
const Actor = require("../models/actor");
const { DataTypes } = require("sequelize");

const Film = db.sequelize.define(
    'film',{
        film_id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
        },
        title:{
            type:DataTypes.TEXT,
        },
        description:{
            type:DataTypes.TEXT,
        },
        release_year:{
            type:DataTypes.INTEGER,
        },
        rental_duration:{
            type:DataTypes.INTEGER,
        },
        rental_rate:{
            type:DataTypes.FLOAT,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

module.exports = Film;