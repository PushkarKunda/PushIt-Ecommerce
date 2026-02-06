const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {}, // Flexible schema, allows any fields
  { timestamps: true, strict: false, collection: "items" } // Explicitly point to "items" collection
);

module.exports = mongoose.model("Item", ItemSchema);
