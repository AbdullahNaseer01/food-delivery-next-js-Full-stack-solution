import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    category: {
        type: String,
        required: true,
    },
    availability: {
        type: String
    },
    tagline: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: String,
    // Add any other relevant details for your food product
});



export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
