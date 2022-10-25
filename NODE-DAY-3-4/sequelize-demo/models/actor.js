const db = require("./index");
const Film = require("../models/film");
const { DataTypes } = require("sequelize");

const Actor = db.sequelize.define(
  "actor",
  {
    actor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Actor;
