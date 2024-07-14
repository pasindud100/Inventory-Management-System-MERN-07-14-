const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const {
  createInventory,
  getAllInventories,
} = require("../controllers/inventoryController");

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), createInventory);
router.get("/", getAllInventories);

module.exports = router;
