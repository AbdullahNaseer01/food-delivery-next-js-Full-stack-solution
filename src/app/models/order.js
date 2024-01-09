import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    deliveryAddress: {
        street: String,
        city: String,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
});

export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
