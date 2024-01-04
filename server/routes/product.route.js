const express = require("express");
const { getAllProduct, getOneProduct, addProduct, updateProduct, deleteProduct} = require("../controller/product.controller");
const { auth } = require("../middlewares/auth.middleware");

const productRoute = express.Router();

productRoute.get("/products", auth, getAllProduct);

productRoute.get("/products/:id", auth, getOneProduct);

productRoute.post("/products", auth, addProduct);

productRoute.patch("/products/:id", auth, updateProduct);

productRoute.delete("/products/:id", auth, deleteProduct);

module.exports = { productRoute };
