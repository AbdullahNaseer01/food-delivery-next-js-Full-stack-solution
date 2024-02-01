import dbConnect from "@/config/db";
import { googleUser } from "@/app/models/googleuser";
import { NextResponse } from 'next/server';

dbConnect();

export async function POST(req, res) {
    console.log("apu hit")
    try {
        const payload = await req.json();
        // Check if the email already exists in the database
        const existingUser = await googleUser.findOne({ email: payload.email });
        if (existingUser) {
            // User with the same email already exists
            console.log('User already exists with email:', payload.email);
            return NextResponse.json({ success: true, message: 'User already exists' });
        }
        // Create a new Google user
        const newGoogleUser = new googleUser({
            username: payload.username,
            email: payload.email,
            // Add other relevant fields from the payload
            role: "Google User", // Set the role for Google users, adjust as needed
        });
        const result = await newGoogleUser.save();

        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error('Error creating Google user:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
