require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

const adminProductsRouter = require('./routes/admin/products-routes');
const shopProductsRouter = require('./routes/shop/shop-items-routes')

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Middleware Configuration
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

// 2. Routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shopProductsRouter)

app.use("/api/shop/items", require("./routes/shop/shop-items-routes"));

// 3. Consolidated Database Connection
console.log("Attempting to connect to MongoDB...");

mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    family: 4, // <--- THIS is the key fix for the ECONNREFUSED DNS error
})
    .then(() => {
        console.log("Connected to MongoDB successfully!");
        // Only start the server AFTER the database is connected
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error("MongoDB Connection Error: ", err.message);
        // Log the full error for debugging but don't let the app hang in a broken state
        process.exit(1);
    });