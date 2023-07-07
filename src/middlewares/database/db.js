const { Sequelize } = require("sequelize");
const { DB_PORT } = require("../../../index.js");

// Fix the DB connection
const sequelize = new Sequelize(DB_PORT, { dialect: "mysql" });
// fix the code above there is the error
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected successfully to the DB");
  } catch (error) {
    console.error("Unable to connect to the DB", error);
  }
  return sequelize;
};

module.exports = { connectDB };
