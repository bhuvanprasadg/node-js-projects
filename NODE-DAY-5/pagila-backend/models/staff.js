const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Store = require("../models/store");
const Address = require("./address");

const Staff = db.sequelize.define(
  "staff",
  {
    staff_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    store_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// Staff.belongsTo(Store, {
//   foreignKey: "store_id",
// });

// Store.hasOne(Staff, {
//   foreignKey: "store_id",
// });

Staff.belongsTo(Address, {foreignKey: 'address_id', required: true});

module.exports = Staff;
