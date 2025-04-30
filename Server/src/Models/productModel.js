import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    originalPrice: {
        type: Number,
        required: true,
    },
    imglink: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const ProductModel = mongoose.model.product || mongoose.model("Product", productSchema);

export default ProductModel;
