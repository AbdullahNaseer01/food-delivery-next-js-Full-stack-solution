import AddtoCartBtn from '../(components)/AddtoCartBtn'
import PastaCategory from '../(components)/PastaCategory';
import SideCategory from '../(components)/SideCategory';
import DealsCategory from '../(components)/DealsCategory';
import FeaturedCategory from '../(components)/FeaturedCategory';
import PizzaCategory from '../(components)/PizzaCategory';
import BaveragesCategory from '../(components)/BeveragesCategory';
import BurgerCategory from '../(components)/BurgerCagtegory';



const page =  () => {
  return (
    <>
    {/* <div className='md:mx-16 w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
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
                  <AddtoCartBtn />
                </div>
              </div>
            </Link>
          </div>

        ))
      }

    </div> */}
    <FeaturedCategory/>
    <DealsCategory/>
    <BurgerCategory/>
    <PizzaCategory/>
    <PastaCategory/>
    <BaveragesCategory/>
    <SideCategory/>
    </>
    

  )
}

export default page