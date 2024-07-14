const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const inventoryRoutes = require("./routes/inventory");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files from the uploads directory

dotenv.config();

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Cannot connect with DB");
    console.error(err.message);
  }
};
connectDB();

app.use("/api/inventories", inventoryRoutes);

const PORT = process.env.PORT || 8050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
