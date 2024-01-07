// import AddtoCartBtn from './AddtoCartBtn'
// import GridSectionCard from './GridSectionCard'
// import Image from 'next/image'
// import ViewProductsBtn from './ViewProductsBtn'

// const fetchProducts = async () => {
//     try {
//         let products = await fetch("http://localhost:3000/api/products", {
//             method: "GET"
//         })
//         products = await products.json()
//         console.log("products", products)
//         return products
//     } catch (error) {
//         console.error(error)
//     }
// }
// let products = await fetchProducts()
// const GridSection = async () => {
//     return (
//         <>
//             <div className="text-center p-10">
//                 <h1 className="text-xl">Product</h1>
//                 <h1 className="font-bold text-2xl mb-4">Most Popular Items</h1>
//             </div>
//             <section
//                 id="Projects"
//                 className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
//             >
//                 {products.map((product) => (
//                     <GridSectionCard
//                         key={product.id}
//                         title={product.title}
//                         imageUrl={product.imageUrl}
//                         price={product.price}
//                     />
//                 ))}
//             </section>
//             <div className='mt-10'>
//                 <ViewProductsBtn />
//             </div>

//         </>

//     )
// }

// export default GridSection




import Link from 'next/link';
import GridSectionCard from './GridSectionCard';
import ViewProductsBtn from './ViewProductsBtn';

const fetchProducts = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/products?category=featured", { cache: 'no-store' }, {
            method: "GET"
        });
        const products = await response.json();
        console.log("products", products);
        return products;
    } catch (error) {
        console.error(error);
    }
};

const GridSection = async () => {
    const products = await fetchProducts();


    return (
        <>
            <div className="text-center p-10">
                <h1 className="text-xl">Product</h1>
                <h1 className="font-bold text-2xl mb-4">Most Popular Items</h1>
            </div>
            <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {products &&
                    products.map((product) => (
                        <GridSectionCard
                            key={product._id}
                            id={product._id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                        />
                    ))
                }
            </section>
            <Link href={"/menu"} className='mt-10'>
                <ViewProductsBtn />
            </Link>
        </>
    );
};
export default GridSection;