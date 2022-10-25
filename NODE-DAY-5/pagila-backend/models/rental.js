const db = require("./index");
const { DataTypes } = require("sequelize");

const Rental = db.sequelize.define(
    'rental',
    {   
        rental_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        inventory_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        staff_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        customer_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rental_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        return_date:{
            type: DataTypes.DATE,
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
)

module.exports = Rental;