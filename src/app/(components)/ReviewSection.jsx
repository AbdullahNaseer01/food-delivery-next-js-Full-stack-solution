import React from 'react'
import Image from 'next/image'
import TestimonialCarousel from './TestimonialCarousel'
const ReviewSection = () => {
    return (
        <section className=" md:mx-16">
            <div className="contain px-5 py-24 mx-auto">
                <p className=" mb-2 text-center text-customOrange">
                   Testimonials
                </p>
                <h1 className="text-3xl title-font font-bold text-gray-900 mb-12 text-center">
                    Our Happy Client Says
                </h1>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                        <TestimonialCarousel />
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full  p-8 rounded flex items-center justify-center">
                            <Image
                                className='mx-auto'
                                src="/burger.png"
                                width={450}
                                height={450}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ReviewSection