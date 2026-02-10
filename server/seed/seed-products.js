const mongoose = require("mongoose");
const Product = require("../models/Product");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const seedProducts = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB.");

    const dataPath = path.join(__dirname, "../../products.json");
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    const productsData = JSON.parse(jsonData).products;

    const productsToInsert = productsData.map((product) => {
      const salePrice = product.price - (product.price * product.discountPercentage) / 100;
      
      return {
        image: product.thumbnail,
        title: product.title,
        description: product.description,
        category: product.category,
        brand: product.brand,
        price: product.price,
        salePrice: parseFloat(salePrice.toFixed(2)),
        totalStock: product.stock,
      };
    });

    console.log(`Found ${productsToInsert.length} products to insert.`);

    // Optional: Clear existing products? The user didn't ask to clear, but usually seed scripts might.
    // I'll stick to just inserting. If duplicates are an issue, I might need to check.
    // For now, I'll just insert. 
    // Actually, to avoid massive duplicates if run multiple times, maybe I should check or clear.
    // I will delete all existing products to ensure a clean state as this seems to be a "setup" task.
    // But safely, I should probably ask. However, usually seeding implies populating. 
    // Given the user said "add it to my backend", maybe appending is better?
    // But `id`s in JSON start from 1. 
    // I will NOT delete existing data to be safe, unless it conflicts. 
    
    // Wait, if I don't delete, I might get duplicates if I run this multiple times. 
    // I'll add a check or just insert. The user wants to "add it". 
    // I will insert.
    
    await Product.insertMany(productsToInsert);
    console.log("Products seeded successfully!");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
