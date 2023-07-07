const express = require("express");
const { Sequelize } = require("sequelize");
require("dotenv").config();
const { connectDB } = require("./src/middlewares/database/db.js");
const categoryRoutes = require("../category/category.routes");
const productsRoutes = require("../products/products.routes");
const makerRoutes = require("../maker/maker.routes");

const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

// create an express server
const server = express();

// Create a Sequelize connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);
// review the code below the error might be down 
sequelize
  .authenticate()
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((error) => {
    console.log("Unable to connect with the database: ", error);
  });

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ extended: false }));

server.use("/products", productsRoutes);
server.use("/maker", makerRoutes);
server.use("/category", categoryRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { DB_PORT };
