import dbConnect from "@/config/db";
import { User } from "@/app/models/user";
import { NextResponse } from 'next/server';

dbConnect();

export async function POST(req, res) {
    try {
        const payload = await req.json();
        // Check if the email or username already exists in the database
        const existingUser = await User.findOne({
            $or: [
                { email: payload.email },
                { username: payload.username }
            ]
        });
        if (existingUser) {
            // User with the same email or username already exists
            return NextResponse.json({ success: false, message: 'User with this email or username already exists' }, { status: 409 });
        }
        // Create a new user
        const newUser = new User(payload);
        const result = await newUser.save();

        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
