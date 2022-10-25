const db = require("./index");
const { DataTypes } = require("sequelize");
const Inventory = require("./inventory");
const Language = require("./language");

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
        rating:{
            type:DataTypes.TEXT,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

Film.belongsTo(Inventory, {foreignKey:'film_id', required:true });
Film.belongsTo(Language, {foreignKey:'language_id', required:true });

module.exports = Film;