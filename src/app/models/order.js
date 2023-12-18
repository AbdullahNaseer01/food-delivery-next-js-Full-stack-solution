import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
    }],
    deliveryAddress: {
        street: String,
        city: String,
        zipCode: String,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    // Add any other relevant details for your order
});

export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
