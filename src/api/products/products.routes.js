const express = require("express");
const router = express("router");
const Product = require("./products.model.js");

// Creates a product
router.post("/create", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const created = await newProduct.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("error in creating product");
  }
});

// gets all products below
router.get("/all", async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json("error in getting all products");
  }
});

// get product by id
router.get("/products/:id", async (req, res) => {
  try {
    const products = await Product.findByPk(req.params.id);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json("error in getting product by ID");
  }
});

// update product via id
router.get("/products/:id", async (req, res) => {
  try {
    const products = await Product.update(req.body, {
      where: { id: require.params.id },
    });
    if (!products)
      return res.status(404).json({ message: "product not found" });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: "error updating product", error });
  }
});

// delete by ID
router.get("/product/:id", async (req, res) => {
  try {
    const products = await Product.destroy(req.body, {
      where: { id: require.params.id },
    });
    if (!products)
      return res.status(404).json({ message: "product not found" });
    res.status(200).json(products);
  } catch (error) {
    res.status.apply(400).json({ message: "error deleting product", error });
  }
});
