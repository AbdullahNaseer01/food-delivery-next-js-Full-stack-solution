

// const page = () => {
//     return (
//         <div className="min-h-screen bg-gray-100 pt-20 mb-1">
//             <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//             <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//                 <div className="rounded-lg md:w-2/3 ">
//                     {/* cart item component for map */}

//                     <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//                         <img
//                             src={"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
//                             alt="product-image"
//                             className="w-full rounded-lg sm:w-40"
//                         />
//                         <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                             <div className="mt-5 sm:mt-0">
//                                 <h2 className="text-lg font-bold text-gray-900">
//                                     title
//                                 </h2>
//                                 <p className="mt-1 text-xs text-gray-700">tagline</p>
//                             </div>
//                             <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                                 <div className="flex items-center border-gray-100">
//                                     <span className="cursor-pointer rounded-l bg-customLightOrange py-1 px-3.5 duration-100 hover:bg-customOrange hover:text-white">
//                                         {" "}
//                                         -{" "}
//                                     </span>
//                                     <input
//                                         className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                                         type="number"
//                                         // defaultValue={2}
//                                         // value={cartItem.quantity}
//                                         min={1}
//                                     />
//                                     {/* <span>{cartItem.productData.quantity}</span> */}
//                                     <span className="cursor-pointer rounded-r bg-customLightOrange py-1 px-3 duration-100 hover:bg-customOrange hover:text-white">
//                                         {" "}
//                                         +{" "}
//                                     </span>
//                                 </div>
//                                 <div className="flex items-center space-x-4">
//                                     <p className="text-sm">1000.00 ₭</p>
//                                     <svg

//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                         stroke="currentColor"
//                                         className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M6 18L18 6M6 6l12 12"
//                                         />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//                         <img
//                             src={"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
//                             alt="product-image"
//                             className="w-full rounded-lg sm:w-40"
//                         />
//                         <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                             <div className="mt-5 sm:mt-0">
//                                 <h2 className="text-lg font-bold text-gray-900">
//                                     title
//                                 </h2>
//                                 <p className="mt-1 text-xs text-gray-700">tagline</p>
//                             </div>
//                             <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                                 <div className="flex items-center border-gray-100">
//                                     <span className="cursor-pointer rounded-l bg-customLightOrange py-1 px-3.5 duration-100 hover:bg-customOrange hover:text-white">
//                                         {" "}
//                                         -{" "}
//                                     </span>
//                                     <input
//                                         className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                                         type="number"
//                                         // defaultValue={2}
//                                         // value={cartItem.quantity}
//                                         min={1}
//                                     />
//                                     {/* <span>{cartItem.productData.quantity}</span> */}
//                                     <span className="cursor-pointer rounded-r bg-customLightOrange py-1 px-3 duration-100 hover:bg-customOrange hover:text-white">
//                                         {" "}
//                                         +{" "}
//                                     </span>
//                                 </div>
//                                 <div className="flex items-center space-x-4">
//                                     <p className="text-sm">1000.00 ₭</p>
//                                     <svg

//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                         stroke="currentColor"
//                                         className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M6 18L18 6M6 6l12 12"
//                                         />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//                         <img
//                             src={"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
//                             alt="product-image"
//                             className="w-full rounded-lg sm:w-40"
//                         />
//                         <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                             <div className="mt-5 sm:mt-0">
//                                 <h2 className="text-lg font-bold text-gray-900">
//                                     title
//                                 </h2>
//                                 <p className="mt-1 text-xs text-gray-700">tagline</p>
//                             </div>
//                             <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                                 <div className="flex items-center border-gray-100">
//                                     <span className="cursor-pointer rounded-l bg-customLightOrange py-1 px-3.5 duration-100 hover:bg-customOrange hover:text-white">
//                                         {" "}
//                                         -{" "}
//                                     </span>
//                                     <input
//                                         className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                                         type="number"
//                                         // defaultValue={2}
//                                         // value={cartItem.quantity}
//                                         min={1}
//                                     />
//                                     {/* <span>{cartItem.productData.quantity}</span> */}
//                                     <span className="cursor-pointer rounded-r bg-customLightOrange py-1 px-3 duration-100 hover:bg-customOrange hover:text-white">
//                                         {" "}
//                                         +{" "}
//                                     </span>
//                                 </div>
//                                 <div className="flex items-center space-x-4">
//                                     <p className="text-sm">1000.00 ₭</p>
//                                     <svg

//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                         stroke="currentColor"
//                                         className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M6 18L18 6M6 6l12 12"
//                                         />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Sub total */}
//                 <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//                     <div className="mb-2 flex justify-between">
//                         <p className="text-gray-700">Subtotal</p>
//                         <p className="text-gray-700">101000 $</p>
//                     </div>
//                     <div className="flex justify-between">
//                         <p className="text-gray-700">Shipping</p>
//                         <p className="text-gray-700">$0.00</p>
//                     </div>
//                     <hr className="my-4" />
//                     <div className="flex justify-between">
//                         <p className="text-lg font-bold">Total</p>
//                         <div className="">
//                             <p className="mb-1 text-lg font-bold">12212 $</p>
//                             <p className="text-sm text-gray-700">including VAT</p>
//                         </div>
//                     </div>
//                     <button className="mt-6 w-full rounded-md bg-customOrange py-1.5 font-medium text-blue-50 hover:bg-customLightOrange">
//                         Check out
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default page




"use client"

import React, { useState, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      const updatedCart = cartItems.map((item) => {
        if (item._id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 mb-1">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((cartItem) => (
            <div
              key={cartItem._id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={cartItem.imageUrl}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{cartItem.title}</h2>
                  <p className="mt-1 text-xs text-gray-700">{cartItem.tagline}</p>
                </div>
                <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    {cartItem.quantity === 1 ? (
                      <button
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-full"
                        onClick={() => removeFromCart(cartItem._id)}
                      >
                        <span className=" text-xl py-2 font-semibold ">
                          <AiOutlineDelete />
                        </span>
                      </button>
                    ) : (
                      <button
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-full"
                        onClick={() => updateCartItemQuantity(cartItem._id, cartItem.quantity - 1)}
                      >
                        -
                      </button>
                    )}
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={cartItem.quantity}
                      onChange={(e) => updateCartItemQuantity(cartItem._id, parseInt(e.target.value, 10))}
                      min={1}
                    />
                    <button
                      className="bg-customLightOrange text-white px-2 py-1 rounded-r-full"
                      onClick={() => updateCartItemQuantity(cartItem._id, cartItem.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{(cartItem.price * cartItem.quantity).toFixed(2)} $</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() => removeFromCart(cartItem._id)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          {/* Subtotal and Total calculations */}
          {/* ... (previous code) */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
