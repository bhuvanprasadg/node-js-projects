const db = require("./index");
const { DataTypes } = require("sequelize");

const Payment = db.sequelize.define(
    'payment',
    {   
        payment_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        customer_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        staff_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rental_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        payment_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

module.exports = Payment;