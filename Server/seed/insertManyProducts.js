import mongoose from "mongoose";
import ProductModel from "../src/Models/productModel.js";

mongoose.connect("mongodb+srv://krishnagupta2022:krish67890@cluster0.fphuszr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {console.log("connected")})

const addManyproducts = async (req, res) => {
    const products = [
        { name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, imglink: "https://res.cloudinary.com/dlggnng6m/image/upload/v1746018205/5d5c2e5250752d55f8b60f2aa2923183dadbc135_zeqnbm.png", discount: 40 },
        { name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, imglink: "https://res.cloudinary.com/dlggnng6m/image/upload/v1746018203/e59d9f348cc24eeff489863523b63971c3ff8e4a_zeewhr.png", discount: 35 },
        { name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, imglink: "https://res.cloudinary.com/dlggnng6m/image/upload/v1746018204/5e634682db5174aff99bb9337d2dc9598a0b44e4_tzcaki.png", discount: 30 },
        { name: "S-Series Comfort Chair", price: 375, originalPrice: 400, imglink: "https://res.cloudinary.com/dlggnng6m/image/upload/v1746018204/288da330273c46e1c3dc0a8915c4b031d0345347_weqlz7.png", discount: 25 },
      ];
      
      ProductModel.insertMany(products)
        .then(() => console.log("Products inserted"))
        .catch(err => console.error("Insert failed", err));
}

addManyproducts()