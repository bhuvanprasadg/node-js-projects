const db = require("./index");
const { DataTypes } = require("sequelize");

const Category = db.sequelize.define(
    'category',
    {   
        category_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
)

module.exports = Category;