import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: String,
    // Add any other relevant details for your food product
});



export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
