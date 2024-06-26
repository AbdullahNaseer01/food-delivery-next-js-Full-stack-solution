import React from 'react'
import AddtoCartBtn from './AddtoCartBtn'
import Link from 'next/link'


const GridSectionCard = ({id, title, imageUrl, price , product}) => {
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href="#">
                <img
                    alt="Product"
                    src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className="h-80 w-72 object-cover rounded-t-xl"
                />
            </Link>
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                        {/* Product Name */}
                        {title}
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                            ${price}
                        </p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                        </del>
                            <AddtoCartBtn product={product} />
                    </div>
                </div>
        </div>
    )
}

export default GridSectionCard