import React from 'react'
import AddtoCartBtn from './AddtoCartBtn'
import GridSectionCard from './GridSectionCard'
import Image from 'next/image'
import ViewProductsBtn from './ViewProductsBtn'

const GridSection = () => {
    return (
        <>
            <div className="text-center p-10">
                <h1 className="text-xl">Product</h1>
                <h1 className="font-bold text-2xl mb-4">Most Popular Items</h1>
            </div>
            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                <GridSectionCard />
                <GridSectionCard />
                <GridSectionCard />
                <GridSectionCard />
                <GridSectionCard />
                <GridSectionCard />
                <GridSectionCard />
                <GridSectionCard />
            </section>
            <div className='mt-10'>
                <ViewProductsBtn />
            </div>
        </>

    )
}

export default GridSection