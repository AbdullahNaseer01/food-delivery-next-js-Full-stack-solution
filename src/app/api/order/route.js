import dbConnect from "@/config/db";
import { Order } from "@/app/models/order";  // Adjust the path accordingly
import { NextResponse } from 'next/server';

dbConnect();

export async function POST(req, res) {
    try {
        const payload = await req.json();
        const { customerName, items, deliveryAddress } = payload;
        console.log('Received values:', payload);

        // You might want to perform additional validation here

        const newOrder = new Order({
            customerName,
            items,
            deliveryAddress,
        });
        console.log("saved order", newOrder)

        const savedOrder = await newOrder.save();

        return NextResponse.json({ order: savedOrder, success: true }, { status: 201 });
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
