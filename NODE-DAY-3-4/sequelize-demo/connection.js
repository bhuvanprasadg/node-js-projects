const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:@localhost:5432/pagila");

// console.log(sequelize);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    sequelize.close();
  }
}

connect().then();

