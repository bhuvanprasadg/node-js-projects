const db = require("./index");
const { DataTypes } = require("sequelize");

const Inventory = db.sequelize.define(
    'inventory',
    {   
        inventory_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        store_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        film_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

module.exports = Inventory;