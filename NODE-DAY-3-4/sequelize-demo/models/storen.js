const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Staffn = require("../models/staffn");

const Storen = db.sequelize.define(
    "storen",
    {
      store_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      manager_staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
);

Storen.belongsTo(Staffn, {
    foreignKey: {
      name: "store_id",
    },
});
  
Staffn.hasOne(Storen, {
    foreignKey: {
      name: "store_id",
    },
});

module.exports = Storen;