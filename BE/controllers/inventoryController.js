const Inventory = require("../models/Inventory");

exports.createInventory = async (req, res) => {
  try {
    const { category, name, quantity, price } = req.body;
    const imageUrl = req.file ? req.file.path : null;
    const newInventory = new Inventory({
      category,
      name,
      quantity,
      price,
      imageUrl,
    });
    await newInventory.save();
    res.status(201).json(newInventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find();
    res.status(200).json(inventories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
