const express = require("express");
const router = express("router");
const Maker = require("./maker.model.js");

// Creates a maker
router.post("/create", async (req, res) => {
  try {
    const newMaker= new Maker(req.body);
    const created = await newMaker.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json("error in creating product");
  }
});

// gets all makers
router.get("/all", async (req, res) => {
  try {
    const maker = await Maker.findAll();
    return res.status(200).json(maker);
  } catch (error) {
    return res.status(500).json("error in getting all products");
  }
});

// delete by maker
router.get("/maker/maker", async (req, res) => {
  try {
    const maker = await Maker.destroy(req.body, {
    where: { name: require.params.maker},
    });
    if (!maker)
      return res.status(404).json({ message: "product not found" });
    res.status(200).json(maker);
  } catch (error) {
    res.status.apply(400).json({ message: "error deleting product", error });
  }
});

//update maker code is pending change the ID on models too. 
// router.get("/maker/", async (req, res) => {
//     try {
//       const products = await Product.update(req.body, {
//         where: { id: require.params.id },
//       });
//       if (!products)
//         return res.status(404).json({ message: "product not found" });
//       res.status(200).json(products);
//     } catch (error) {
//       res.status(400).json({ message: "error updating product", error });
//     }
//   });