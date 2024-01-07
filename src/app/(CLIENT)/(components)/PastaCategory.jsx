import Link from 'next/link'
import AddtoCartBtn from './AddtoCartBtn';


const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/products?category=pastas", { cache: 'no-store' }, {
      method: "GET"
    });
    const products = await response.json();
    console.log("products", products);
    return products;
  } catch (error) {
    console.error(error);
  }
};

const PastaCategory = async () => {
  const products = await fetchProducts();
  return (
    <>
    <p>Pasta Category</p>
    <div className='md:mx-16 w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
      {products &&
        products.map((product) => (
          <div key={product._id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href="#">
              <img
                alt="Product"
                src={product.image}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.title}

                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {product.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <AddtoCartBtn product={product} />
                </div>
              </div>
            </Link>
          </div>

        ))
      }

    </div>
    </>
    

  )
}

export default PastaCategory