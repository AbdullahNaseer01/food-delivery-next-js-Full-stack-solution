// // "use client"
// // import { useState } from 'react';
// // import { FaOpencart } from "react-icons/fa6";
// // import { LuLoader } from "react-icons/lu";

// // const AddProductForm = () => {
// //     const [loading, setLoading] = useState(false);
// //     const [formData, setFormData] = useState({
// //         title: '',
// //         tagline: '',
// //         price: '',
// //         description: '',
// //         category: 'fruits', // default category
// //         availability: 'In Stock', // default availability
// //         image: null,
// //     });

// //     const handleChange = (event) => {
// //         const { name, value } = event.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value,
// //         });
// //     };
// //     const handleCategoryChange = (e) => {
// //         const newCategory = e.target.value;
// //         console.log(newCategory);
// //         setFormData({
// //             ...formData,
// //             category: newCategory,
// //         });
// //         console.log(newCategory);
// //     };

// //     const handleAvailabilityChange = (e) => {
// //         const newAvailability = e.target.value;
// //         console.log(newAvailability);
// //         setFormData({
// //             ...formData,
// //             availability: newAvailability,
// //         });
// //         console.log(newAvailability);
// //     };

// //     const handleFileChange = (event) => {
// //         const { name, files } = event.target;
// //         setFormData({
// //             ...formData,
// //             [name]: files[0],
// //         });
// //     };
// //     const handleAddProduct = async (event) => {
// //         event.preventDefault();
// //         console.log("product", formData)

// //         setLoading(true); // Set loading to true before sending the request

// //         try {
// //             const formData = new FormData(event.target);
// //             const response = await fetch('/api/products', {
// //                 method: 'POST',
// //                 body: formData,
// //             });

// //             const data = await response.json();

// //             if (data.success) {
// //                 console.log('Product created successfully!');
// //                 // Handle successful product creation (e.g., clear form, display success message)
// //             } else {
// //                 console.error('Error creating product:', data.message);
// //                 // Handle error (e.g., display error message)
// //             }
// //         } catch (error) {
// //             console.error('Error:', error);
// //             // Handle generic errors
// //         } finally {
// //             setLoading(false); // Set loading to false after the request completes
// //         }
// //     };

// //     // const handleAddProduct = (e) => {
// //     //     e.preventDefault()
// //     //     console.log("the product", formData)
// //     // }



// //     return (
// //         <div className="leading-loose mx-2">
// //             <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleAddProduct}>
// //                 <p className="text-lg text-gray-800 font-medium pb-4">
// //                     Fill in the information very carefully.
// //                 </p>
// //                 <div className="">
// //                     <label className="block text-sm text-gray-600" htmlFor="title">
// //                         Product Title
// //                     </label>
// //                     <input
// //                         className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
// //                         id="title"
// //                         name="title"
// //                         type="text"
// //                         value={formData.title}
// //                         required=""
// //                         onChange={handleChange}
// //                         placeholder="Product Title / Name"
// //                         aria-label="Name"
// //                     />
// //                 </div>
// //                 <div className="mt-2">
// //                     <label className="block text-sm text-gray-600" htmlFor="tagline">
// //                         Tagline
// //                     </label>
// //                     <input
// //                         className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
// //                         id="tagline"
// //                         name="tagline"
// //                         type="text"
// //                         value={formData.tagline}
// //                         required=""
// //                         onChange={handleChange}
// //                         placeholder="Tagline / small Description"
// //                         aria-label="tagline"
// //                     />
// //                 </div>
// //                 <div className="mt-2">
// //                     <label className=" block text-sm text-gray-600" htmlFor="price">
// //                         Price
// //                     </label>
// //                     <input
// //                         className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
// //                         id="price"
// //                         name="price"
// //                         type="number"
// //                         value={formData.price}
// //                         required=""
// //                         onChange={handleChange}
// //                         placeholder="Product Price"
// //                         aria-label="price"
// //                     />
// //                 </div>
// //                 <div class="mt-2">
// //                     <label class=" block text-sm text-gray-600" for="message">Description</label>
// //                     <textarea value={formData.description} onChange={handleChange} class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="description" name="description" rows="6" required="" placeholder="Product Description" aria-label="Text"></textarea>
// //                 </div>
// //                 <div className="inline-block mt-2 w-1/2 pr-1">
// //                     <label className="hidden block text-sm text-gray-600" htmlFor="category">
// //                         Category
// //                     </label>


// //                     <select id="category" onChange={handleCategoryChange} value={formData.category} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
// //                         <option value="fruits">Fruits</option>
// //                         <option value="vegetables">Vegetables</option>
// //                         <option value="canned-food">Canned Food</option>
// //                         <option value="bakery-items">Bakery Items</option>
// //                         <option value="fishes">Fishes</option>
// //                         <option value="egg-and-dairy">Egg and Dairy</option>
// //                         <option value="soft-drinks-snacks">Soft Drinks and Snacks</option>
// //                         <option value="soft-drinks-snacks">others</option>
// //                     </select>
// //                 </div>
// //                 <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
// //                     <label className="hidden block text-sm text-gray-600" htmlFor="availability">
// //                         Availability
// //                     </label>
// //                     <select onChange={handleAvailabilityChange} value={formData.availability} id="availability" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
// //                         <option value="In Stock">In stock</option>
// //                         <option value="Out of Stoke">Out of Stoke</option>
// //                         <option value="Comming Soon">Comming Soon</option>
// //                     </select>
// //                 </div>
// //                 <label className="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Upload file</label>
// //                 <input
// //                     className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
// //                     aria-describedby="file_input_help"
// //                     id="image"
// //                     name="image"
// //                     onChange={handleFileChange}
// //                     // onChange={(event) => { setImageFile(event.target.files[0]); }}
// //                     type="file"
// //                     accept="image/*"
// //                 />

// //                 <p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
// //                 {/* <p class="mt-1 text-sm text-gray-500 " id="file_input_help">{imageError}</p> */}

// //                 <div className="mt-6">
// //                     <button
// //                         className="px-4 py-1 text-white font-light tracking-wider bg-indigo-600 rounded"
// //                         type="submit"
// //                         disabled={loading}
// //                     >
// //                         {loading ? (
// //                             <div>
// //                                 Adding Don't Leave the Page
// //                                 <span className="text-2xl"><LuLoader /></span>
// //                             </div>
// //                         ) : (
// //                             <div className="flex justify-between">
// //                                 <span>Add Product</span>
// //                                 <span className="text-xl mt-2 ml-2"><FaOpencart /></span>
// //                             </div>
// //                         )}
// //                     </button>
// //                 </div>
// //             </form>
// //         </div>
// //     )
// // }

// // export default AddProductForm

















"use client"
import { useState , useEffect } from 'react';
import { FaOpencart } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import { toast } from 'react-toastify';

const AddProductForm = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState()
    const [formData, setFormData] = useState({
        title: '',
        tagline: '',
        price: '',
        description: '',
        category: 'fruits', // default category
        availability: 'In Stock', // default availability
        image: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setFormData({
            ...formData,
            category: newCategory,
        });
    };

    const handleAvailabilityChange = (e) => {
        const newAvailability = e.target.value;
        setFormData({
            ...formData,
            availability: newAvailability,
        });
    };

    // const handleAddProduct = async (event) => {
    //     event.preventDefault();
    //     const imageUrl = await imageUplaod();
    //         setFormData({
    //             ...formData,
    //             image: imageUrl
    //         });
    //     // Log the updated formData
    //     console.log("form data",formData)
    
    //     // Call the real API with the updated formData
    //     try {
    //         const response = await fetch("http://localhost:3000/api/products", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 // Add any other headers as needed
    //             },
    //             body: JSON.stringify(formData),
    //         });
    
    //         // Handle the API response
    //         if (response.ok) {
    //             // API call successful, handle success case
    //             console.log("API call successful");
    //         } else {
    //             // API call failed, handle error case
    //             console.error("API call failed:", response.status, response.statusText);
    //         }
    //     } catch (error) {
    //         // Handle any network or other errors
    //         console.error("Error in API call:", error);
    //     }
    // };


const handleAddProduct = async (event) => {
    event.preventDefault();
    try {
        const imageUrl = await imageUplaod();
        
        // Call the real API with the updated formData
        const response = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Add any other headers as needed
            },
            body: JSON.stringify({
                ...formData,
                image: imageUrl,
            }),
        });

        // Handle the API response
        if (response.ok) {
            // API call successful, handle success case
            console.log("API call successful");
            toast.success("Product Added Successfully 🙂")
        } else {
            // API call failed, handle error case
            console.error("API call failed:", response.status, response.statusText);
            toast.error("Something Went Wrong! 😭")
        }
    } catch (error) {
        // Handle any network or other errors
        console.error("Error in API call:", error);
        toast.error("Something Went Wrong! 😭")

    }
};


    useEffect(() => {
        // Log the updated formData
        console.log("formdatatosend now", formData);
    
        // Call the real API with the updated formData
        // ... (rest of your API call logic)
    }, [formData]);
    
    const imageUplaod = async () => {
        const data = new FormData();
        data.append('file', file);
        data.append("upload_preset", "food-Delivery-Next");
        data.append("cloud_name", "dumywm3ow");

        const res = await fetch("https://api.cloudinary.com/v1_1/dumywm3ow/image/upload", {
            method: "POST",
            body: data
        });
        const res2 = await res.json();
        console.log(res2.url);
        return res2.url;
    }
    return (
        <div className="leading-loose mx-2">
            <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleAddProduct}>
                <p className="text-lg text-gray-800 font-medium pb-4">
                    Fill in the information very carefully.
                </p>
                <div className="">
                    <label className="block text-sm text-gray-600" htmlFor="title">
                        Product Title
                    </label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        required=""
                        onChange={handleChange}
                        placeholder="Product Title / Name"
                        aria-label="Name"
                    />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="tagline">
                        Tagline
                    </label>
                    <input
                        className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                        id="tagline"
                        name="tagline"
                        type="text"
                        value={formData.tagline}
                        required=""
                        onChange={handleChange}
                        placeholder="Tagline / small Description"
                        aria-label="tagline"
                    />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        required=""
                        onChange={handleChange}
                        placeholder="Product Price"
                        aria-label="price"
                    />
                </div>
                <div class="mt-2">
                    <label class=" block text-sm text-gray-600" for="message">Description</label>
                    <textarea value={formData.description} onChange={handleChange} class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="description" name="description" rows="6" required="" placeholder="Product Description" aria-label="Text"></textarea>
                </div>
                <div className="inline-block mt-2 w-1/2 pr-1">
                    <label className="hidden block text-sm text-gray-600" htmlFor="category">
                        Category
                    </label>


                    <select id="category" onChange={handleCategoryChange} value={formData.category} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="burgers">Burgers</option>
                        <option value="deals">Deals</option>
                        <option value="pizzas">Pizzas</option>
                        <option value="featured">Featured</option>
                        <option value="pastas">Pasta</option>
                        <option value="baverages">Baverages</option>
                        <option value="sides">Sides</option>
                        {/* <option value="soft-drinks-snacks">others</option> */}
                    </select>
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label className="hidden block text-sm text-gray-600" htmlFor="availability">
                        Availability
                    </label>
                    <select onChange={handleAvailabilityChange} value={formData.availability} id="availability" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="In Stock">In stock</option>
                        <option value="Out of Stoke">Out of Stoke</option>
                        <option value="Comming Soon">Comming Soon</option>
                    </select>
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Upload file</label>
                <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    aria-describedby="file_input_help"
                    id="image"
                    name="image"
                    onChange={(event) => { setFile(event.target.files[0]); }}
                    type="file"
                    accept="image/*"
                />

                <p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                {/* <p class="mt-1 text-sm text-gray-500 " id="file_input_help">{imageError}</p> */}

                <div className="mt-6">
                    <button
                        className="px-4 py-1 text-white font-light tracking-wider bg-indigo-600 rounded"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <div>
                                Adding Dont Leave the Page
                                <span className="text-2xl"><LuLoader /></span>
                            </div>
                        ) : (
                            <div className="flex justify-between">
                                <span>Add Product</span>
                                <span className="text-xl mt-2 ml-2"><FaOpencart /></span>
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProductForm











// const handleAddProduct = async (event) => {
//     event.preventDefault();

//     setLoading(true);

//     try {
//         const formData = new FormData();
//         formData.append('title', formData.title);
//         formData.append('tagline', formData.tagline);
//         formData.append('price', formData.price);
//         formData.append('description', formData.description);
//         formData.append('category', formData.category);
//         formData.append('availability', formData.availability);
//         formData.append('image', formData.image);

//         const response = await fetch('/api/products', {
//             method: 'POST',
//             body: formData,
//         });

//         const data = await response.json();

//         if (data.success) {
//             console.log('Product created successfully!');
//         } else {
//             console.error('Error creating product:', data.message);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     } finally {
//         setLoading(false);
//     }
// };













    // const handleFileChange = (event) => {
    //     const { name, files } = event.target;
    //     setFile({
    //         ...file,
    //         [name]: files[0],
    //     });
    //     console.log("setted file",file)
    // };



    // const handleAddProduct = async (event) => {
    //     event.preventDefault();
    //     const imageUrl = await imageUplaod()
    //     console.log("product", formData)

    //     setLoading(true); // Set loading to true before sending the request

    //     try {
    //         const formData = new FormData(event.target);
    //         const response = await fetch('/api/products', {
    //             method: 'POST',
    //             body: formData,
    //             header: {
    //                 "Content-Type": 'application/json'
    //             }
    //         });

    //         const data = await response.json();

    //         if (data.success) {
    //             console.log('Product created successfully!');
    //             // Handle successful product creation (e.g., clear form, display success message)
    //         } else {
    //             console.error('Error creating product:', data.message);
    //             // Handle error (e.g., display error message)
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         // Handle generic errors
    //     } finally {
    //         setLoading(false); // Set loading to false after the request completes
    //     }
    // };


    // const imageUplaod = async () => {
    //     const data = new FormData()
    //     data.append('file', formData.image),
    //         data.append("upload_preset", "food-Delivery-Next")
    //     data.append("cloud_name", "dumywm3ow")
    //     const res = await fetch("https://api.cloudinary.com/v1_1/dumywm3ow/image/upload", {
    //         method: "POST",
    //         body: data
    //     })
    //     const res2 = await res.json()
    //     console.log(res2)
    // }


    // const handleAddProduct = async (event) => {
    //     event.preventDefault();

    //     setLoading(true);

    //     try {
    //         const imageUrl = await imageUplaod();
    //         setFormData({
    //             ...formData,
    //             image: imageUrl,
    //         });

    //         const formDataToSend = new FormData();
    //         formDataToSend.append('title', formData.title);
    //         formDataToSend.append('tagline', formData.tagline);
    //         formDataToSend.append('price', formData.price);
    //         formDataToSend.append('description', formData.description);
    //         formDataToSend.append('category', formData.category);
    //         formDataToSend.append('availability', formData.availability);
    //         formDataToSend.append('image', formData.image);
    //         console.log("formDataToSend:", formDataToSend)
    //         const response = await fetch('/api/products', {
    //             method: 'POST',
    //             body: formDataToSend,
    //             headers: {
    //                 // Add any other headers if needed
    //             },
    //         });

    //         const data = await response.json();

    //         if (data.success) {
    //             console.log('Product created successfully!');
    //             // Handle successful product creation (e.g., clear form, display success message)
    //         } else {
    //             console.error('Error creating product:', data.message);
    //             // Handle error (e.g., display error message)
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const handleAddProduct = async (event) => {
    //     event.preventDefault();

    //     setLoading(true);

    //     try {
    //         const imageUrl = await imageUplaod();

    //         const formDataToSend = new FormData();
    //         formDataToSend.append('title', formData.title);
    //         formDataToSend.append('tagline', formData.tagline);
    //         formDataToSend.append('price', formData.price);
    //         formDataToSend.append('description', formData.description);
    //         formDataToSend.append('category', formData.category);
    //         formDataToSend.append('availability', formData.availability);
    //         formDataToSend.append('image', imageUrl); // Use the imageUrl obtained from Cloudinary

    //         const response = await fetch('/api/products', {
    //             method: 'POST',
    //             body: formDataToSend,
    //             headers: {
    //                 // Add any other headers if needed
    //             },
    //         });

    //         const data = await response.json();

    //         if (data.success) {
    //             console.log('Product created successfully!');
    //             // Handle successful product creation (e.g., clear form, display success message)
    //         } else {
    //             console.error('Error creating product:', data.message);
    //             // Handle error (e.g., display error message)
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
