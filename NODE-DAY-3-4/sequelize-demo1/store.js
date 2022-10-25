const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Staff = require("./staff");

const Store = db.sequelize.define(
  "store",
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

Store.belongsTo(Staff, {
  foreignKey: {
    name: "store_id",
  },
});

Staff.hasOne(Store, {
  foreignKey: {
    name: "store_id",
  },
});

module.exports = Store;
