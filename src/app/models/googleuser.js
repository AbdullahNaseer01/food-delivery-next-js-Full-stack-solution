import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    address: String,
    phoneNumber: String,
    role: String,
});


export const googleUser = mongoose.models.googleUser || mongoose.model("googleUser", userSchema);
