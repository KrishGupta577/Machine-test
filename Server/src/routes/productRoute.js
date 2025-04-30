import express from "express";
import { getProducts } from "../controllers/productController.js";

const productRoutes = express.Router()

productRoutes.get('/get-products',getProducts)

export default productRoutes