const mongoose = require("mongoose");
const InventorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});
module.exports = mongoose.model("Inventory", InventorySchema);
