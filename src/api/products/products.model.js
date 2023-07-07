const { Sequelize, DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = require("../../../index.js");

const sequelize = new Sequelize("products", DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

const Product = sequelize.define("products", {
  Productid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  maker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

await sequelize.sync();
module.exports = Product;
