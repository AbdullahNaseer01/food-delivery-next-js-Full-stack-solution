import dbConnect from "@/config/db";
import { Product } from "@/app/models/product";
import { NextResponse } from 'next/server';

dbConnect();

export async function POST(req, res) {
    try {
        const payload = await req.json();
        const { title, description, category, price, imageUrl } = payload;
        console.log('Received values:', payload);

        if (!title || !description || !category || !price || !imageUrl) {
            return NextResponse.json({ success: false, message: "Please fill all the required fields" }, { status: 422 });
        }

        const product = new Product({
            title: payload.title,
            description: payload.description,
            serving: payload.serving,
            category: payload.category,
            price: payload.price,
            imageUrl: payload.imageUrl,
        });
        console.log("saved product",product)

        await product.save();

        return NextResponse.json({ product, success: true }, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
