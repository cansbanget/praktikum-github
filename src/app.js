require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

app.use(express.json()); // Middleware untuk parsing JSON body

// Rute untuk setiap modul
app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/transactions", transactionRoutes);

// Rute dasar
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce API!");
});

module.exports = app;
