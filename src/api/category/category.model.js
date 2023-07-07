const { sequelize, DataTypes, Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = require('../../../index.js');

const sequelize = new Sequelize("category", DB_USER , DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
  });

const Category = sequelize.define("category", {
    Category: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    }
    
})
    await sequelize.sync();
module.exports = Category;