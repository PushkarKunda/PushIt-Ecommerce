const mongoose = require("mongoose");
const Product = require("../models/Product");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const removeItems = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB.");

    const categories = await Product.distinct("category");
    console.log("Current Categories:", categories);

    const keywords = ["kitchen", "food", "grocer"];
    
    const categoriesToRemove = categories.filter(cat => 
        keywords.some(kw => cat.toLowerCase().includes(kw))
    );

    console.log("Categories identified to remove:", categoriesToRemove);

    if (categoriesToRemove.length > 0) {
        const result = await Product.deleteMany({ category: { $in: categoriesToRemove } });
        console.log(`Successfully deleted ${result.deletedCount} products from categories: ${categoriesToRemove.join(", ")}`);
    } else {
        console.log("No categories matching 'kitchen' or 'food' were found in the database.");
        
        // Let's also search by title or description just in case the category didn't match
        const keywordRegex = new RegExp(keywords.join("|"), "i");
        const extraResult = await Product.deleteMany({
            $or: [
                { title: keywordRegex },
                { description: keywordRegex }
            ]
        });
        
        if (extraResult.deletedCount > 0) {
            console.log(`Successfully deleted ${extraResult.deletedCount} products matching 'kitchen' or 'food' in title/description.`);
        } else {
            console.log("No products matching 'kitchen' or 'food' in title/description were found either.");
        }
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

removeItems();
