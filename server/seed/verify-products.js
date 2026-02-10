const mongoose = require("mongoose");
const Product = require("../models/Product");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const verifyProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const count = await Product.countDocuments();
    console.log(`Total products in DB: ${count}`);
    process.exit(0);
  } catch (error) {
    console.error("Error verifying products:", error);
    process.exit(1);
  }
};

verifyProducts();
