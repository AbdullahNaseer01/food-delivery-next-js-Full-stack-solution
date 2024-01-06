import dbConnect from "@/config/db";
import { Product } from "@/app/models/product";
import { NextResponse } from 'next/server';

dbConnect();

export async function POST(req, res) {
    try {
        const payload = await req.json();
        const { title, description, category, price, image, tagline, availability } = payload;
        console.log('Received values:', payload);

        if (!title || !description || !category || !price || !image || !tagline || !availability) {
            return NextResponse.json({ success: false, message: "Please fill all the required fields" }, { status: 422 });
        }

        const product = new Product({
            title: payload.title,
            tagline: payload.tagline,
            description: payload.description,
            availability: payload.availability,
            category: payload.category,
            price: payload.price,
            image: payload.image,
        });
        console.log("saved product", product)

        await product.save();

        return NextResponse.json({ product, success: true }, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(req, res) {
    try {
        console.log(req.query)
        const products = await Product.find({category:"fruits"});
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}


// export async function GET(req, res) {
//     try {
//         console.log(req.params)
//         const category = req.query
//         const products = await Product.find({ category: category });
//         return NextResponse.json(products, { status: 200 });
//     } catch (error) {
//         NextResponse.json("no product found")
//     }
// }






















// import multer from 'multer';
// import dbConnect from "@/config/db";
// import { Product } from "@/app/models/product";
// import { NextResponse } from 'next/server';

// dbConnect();

// const upload = multer({ dest: 'uploads/' }); // Configure multer to store images in 'uploads' directory

// export async function POST(req, res) {
//     try {
//         const { title, tagline, description, category, price, availability } = await req.body; // Access product data from body
//         const image = req.file; // Access uploaded image file

//         if (!title || !description || !category || !availability || !tagline || !price || !image) {
//             return NextResponse.json({ success: false, message: "Please fill all the required fields" }, { status: 422 });
//         }

//         // Store image in database (using Mongoose example for MongoDB)
//         const storedImage = await image.buffer();
//         const product = new Product({
//             title,
//             tagline,
//             description,
//             category,
//             availability,
//             price,
//             image: storedImage, // Store image data directly in the 'image' field
//         });

//         await product.save();

//         const imageUrl = '/uploads/' + image.filename; // Generate URL based on your image storage setup

//         return NextResponse.json({ product, imageUrl, success: true }, { status: 201 });
//     } catch (error) {
//         console.error('Error creating product:', error);
//         return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
//     }
// }






// import dbConnect from "@/config/db";
// import { Product } from "@/app/models/product";
// import { NextResponse } from 'next/server';

// dbConnect();

// export async function POST(req, res) {
//     try {
//         const payload = await req.json();
//         const { title, description, category, price, imageUrl } = payload;
//         console.log('Received values:', payload);

//         if (!title || !description || !category || !price || !imageUrl) {
//             return NextResponse.json({ success: false, message: "Please fill all the required fields" }, { status: 422 });
//         }

//         const product = new Product({
//             title: payload.title,
//             description: payload.description,
//             serving: payload.serving,
//             category: payload.category,
//             price: payload.price,
//             imageUrl: payload.imageUrl,
//         });
//         console.log("saved product", product)

//         await product.save();

//         return NextResponse.json({ product, success: true }, { status: 201 });
//     } catch (error) {
//         console.error('Error creating product:', error);
//         return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
//     }
// }

