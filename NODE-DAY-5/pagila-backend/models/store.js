const db = require("../models/index");
const { DataTypes } = require("sequelize");

const Store = db.sequelize.define(
  "store",
  {
    store_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Store;
