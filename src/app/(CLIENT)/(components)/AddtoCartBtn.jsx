// import React from 'react'

// const AddtoCartBtn = () => {
//     return (
//         <button
//             className="ml-auto bg-customOrange text-white px-4 py-2 rounded-full cursor-pointer text-lg"
//         >
//             Add to Cart
//         </button>

//     )
// }

// export default AddtoCartBtn

"use client"
// import React, { useState, useEffect } from 'react';

// const AddtoCartBtn = ({ product }) => {
//     const [quantity, setQuantity] = useState(0);
//     const [isAdded, setIsAdded] = useState(false);

//     useEffect(() => {
//         // Check if product is already in cart
//         const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//         const existingItem = cartItems.find((item) => item._id === product._id);
//         if (existingItem) {
//             setQuantity(existingItem.quantity);
//             setIsAdded(true);
//         }
//     }, [product]);

//     const handleClickAdd = () => {
//         setQuantity(quantity + 1);
//         updateCart();
//     };

//     const handleClickRemove = () => {
//         if (quantity > 0) {
//             setQuantity(quantity - 1);
//             updateCart();
//         }
//     };

//     const updateCart = () => {
//         const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//         const existingItemIndex = cartItems.findIndex((item) => item._id === product._id);

//         if (existingItemIndex !== -1) {
//             // Update quantity
//             cartItems[existingItemIndex].quantity = quantity;
//         } else {
//             // Add new item
//             cartItems.push({ ...product, quantity });
//         }

//         localStorage.setItem('cart', JSON.stringify(cartItems));
//     };

//     return (
//         <div>
//             {isAdded && quantity > 0 ? (
//                 <div className="flex items-center">
//                     <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-full" onClick={handleClickRemove}>
//                         -
//                     </button>
//                     <span className="mx-2">{quantity}</span>
//                     <button className="bg-customOrange text-white px-2 py-1 rounded-r-full" onClick={handleClickAdd}>
//                         +
//                     </button>
//                 </div>
//             ) : (
//                 <button
//                     className={`ml-auto bg-customOrange text-white px-4 py-2 rounded-full cursor-pointer text-lg ${isAdded ? 'opacity-50' : ''}`}
//                     onClick={() => {
//                         setQuantity(1);
//                         updateCart();
//                     }}
//                 >
//                     {isAdded ? 'Added' : 'Add to Cart'}
//                 </button>
//             )}
//         </div>
//     );
// };

// const AddtoCartBtn = ({ product }) => {
//     if (!product) {
//         return <>lorem</>;
//     }
//     const [quantity, setQuantity] = useState(0);
//     const [isAdded, setIsAdded] = useState(false);

//     useEffect(() => {
//         // Check if product is already in cart
//         const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//         const existingItem = cartItems.find((item) => item._id === product._id);
//         if (existingItem) {
//             setQuantity(existingItem.quantity);
//             setIsAdded(true);
//         }
//     }, [product]);

//     const handleClickAdd = () => {
//         setQuantity(quantity + 1);
//         updateCart();
//     };

//     const handleClickRemove = () => {
//         if (quantity > 0) {
//             setQuantity(quantity - 1);
//             updateCart();
//         }
//     };

//     const updateCart = () => {
//         const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//         const existingItemIndex = cartItems.findIndex((item) => item._id === product._id);

//         if (existingItemIndex !== -1) {
//             // Update quantity
//             cartItems[existingItemIndex].quantity = quantity;
//         } else {
//             // Add new item
//             cartItems.push({ ...product, quantity });
//         }

//         localStorage.setItem('cart', JSON.stringify(cartItems));
//     };

//     return (
//         <div>
//             {isAdded && quantity > 0 ? (
//                 <div className="flex items-center">
//                     <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-full" onClick={handleClickRemove}>
//                         -
//                     </button>
//                     <span className="mx-2">{quantity}</span>
//                     <button className="bg-customOrange text-white px-2 py-1 rounded-r-full" onClick={handleClickAdd}>
//                         +
//                     </button>
//                 </div>
//             ) : (
//                 <button
//                     className={`ml-auto bg-customOrange text-white px-4 py-2 rounded-full cursor-pointer text-lg ${isAdded ? 'opacity-50' : ''}`}
//                     onClick={() => {
//                         setQuantity(1);
//                         updateCart();
//                     }}
//                 >
//                     {isAdded ? 'Added' : 'Add to Cart'}
//                 </button>
//             )}
//         </div>
//     );
// }


// export default AddtoCartBtn;


import React, { useState, useEffect } from 'react';

const AddtoCartBtn = ({ product }) => {
    if (!product) {
        return <>Product information is missing</>;
    }

    const [quantity, setQuantity] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        // Check if product is already in cart
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cartItems.find((item) => item._id === product._id);

        if (existingItem) {
            setQuantity(existingItem.quantity);
            setIsAdded(true);
        } else {
            // If the product is not in the cart, set the initial quantity to 1
            setQuantity(1);
        }
    }, [product]);

    useEffect(() => {
        // Synchronize local storage with the state whenever quantity changes
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cartItems.findIndex((item) => item._id === product._id);

        if (existingItemIndex !== -1) {
            // Update local storage with the latest quantity
            if (quantity !== 0) {  // Add this condition to prevent updating local storage during initial mount
                cartItems[existingItemIndex].quantity = quantity;
                localStorage.setItem('cart', JSON.stringify(cartItems));
            }
        }
    }, [quantity, product]);

    const handleRemoveFromCart = () => {
        if (quantity === 1) {
            // If quantity is 1, remove the item from the cart
            removeFromCart();
        } else {
            // If quantity is more than 1, decrease the quantity
            setQuantity(quantity - 1);
        }
    };

    const handleClickAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        console.log('Adding to cart:', product);
        setQuantity(1);
        updateCart();
    };

    const updateCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cartItems.findIndex((item) => item._id === product._id);

        if (existingItemIndex !== -1) {
            // Update quantity
            cartItems[existingItemIndex].quantity = quantity;
        } else {
            // Add new item with initial quantity 1
            cartItems.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        setQuantity(1); // Set the quantity to 1 after updating the cart
        setIsAdded(true);
    };

    const removeFromCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cartItems.filter((item) => item._id !== product._id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setQuantity(0);
        setIsAdded(false);
    };

    return (
        <div>
            {isAdded && quantity > 0 ? (
                <div className="flex items-center">
                    <button
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-full"
                        onClick={handleRemoveFromCart}
                    >
                        {quantity === 1 ? 'Remove' : '-'}
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button className="bg-customOrange text-white px-2 py-1 rounded-r-full" onClick={handleClickAdd}>
                        +
                    </button>
                </div>
            ) : (
                <button
                    className="ml-auto bg-customOrange text-white px-4 py-2 rounded-full cursor-pointer text-lg"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default AddtoCartBtn;

