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
    password: {
        type: String,
        required: true,
    },
    // password: {
    //     type: String,
    //     // required: true,
    // },
    address: String,
    phoneNumber: String,
});


export const User = mongoose.models.User || mongoose.model("User", userSchema);
