const db = require("./index");
const { DataTypes } = require("sequelize");

const Language = db.sequelize.define(
    'language',
    {   
        language_id:{
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

module.exports = Language;