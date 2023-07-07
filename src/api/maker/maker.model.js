const { Sequelize, DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = require('../../../index.js');

const sequelize = new Sequelize("maker", DB_USER , DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

const Maker = sequelize.define("maker", {
  Maker: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },

  // add maker id
});
await sequelize.sync();
module.exports = Maker;
