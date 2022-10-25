const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:9999@localhost:8080/pagila");
module.exports = sequelize;
