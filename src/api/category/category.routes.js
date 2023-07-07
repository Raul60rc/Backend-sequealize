const express = require("express");
const router = express("router");
const Category = require("./category.model");

// creates a category
router.post("/create", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const created = await newCategory.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("error in creating category");
  }
});

// get category

router.get("/all", async (req, res) => {
  try {
    const category = await Category.findAll();
    return res.satus(200), json(category);
  } catch (error) {
    return res.status(500).json("error in getting all categories");
  }
});

// delete category

router.get("/category", async (req, res) => {
  try {
    const category = await Category.destroy(req, body, {
      where: { name: require.params.category },
    });
    if (!category)
      return res.status(404).json({ message: "category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status.apply(400).json({ message: "error deleting category", error });
  }
});

//update code is pending

