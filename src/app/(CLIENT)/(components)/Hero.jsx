import React from 'react'
import Image from 'next/image'
import { IoIosArrowRoundForward } from "react-icons/io";
const Hero = () => {
    return (
        <>
            <div className='md:flex md:mx-16 justify-between mt-7'>
                <div className='text text-center md:text-left px-2 flex-1'>
                    <div className=" mx-auto md:mx-0 delivery w-[250px] h-[56px] bg-customLightOrange rounded-[31.50px] flex justify-between">
                        <div className="ml-4 mt-4 text-customOrange " >Bike Delivery</div>
                        <Image
                            className=' mr-1 rounded-full'
                            src="/delivery.svg"
                            width={59}
                            height={43}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="herotext text-7xl font-bold mt-5 leading-snug">The Fastest <br/> Delivery <br /> In <span className='text-customOrange'>Your City</span></div>
                    <div className='md:mr-48 mt-2'>  repellendus explicabo aut nostrum eius voluptatem quia impedit laboriosam consectetur consequuntur, magni iste officia eveniet iusto libero vel. Expedita totam corrupti magni veniam velit!</div>
                    <div className="buttons md:flex mt-2">
                        <button className='bg-gradient-to-b from-orange-300 to-orange-400 text-white px-16 py-5 mt-3 scroll-py-2 rounded-md'>Order Now</button>
                        <button className="flex justify-between mx-auto md:mx-0 mb-3">
                            <div className='h-10'>
                                <Image
                                    className=' rounded-ful'
                                    src="/Playbutton.svg"
                                    width={88}
                                    height={88}
                                    alt="Picture of the author"
                                />
                            </div>

                            <div className="play pt-8">Order Process</div>
                        </button>
                    </div>
                </div>
                <div className="product flex-1 mt-12 md:mt-0 ">
                    <div className='flex justify-end static'>
                        <div className="mx-auto md:mx-0 w-[290px] md:w-[320px] h-[550px] md:h-[600px] bg-gradient-to-b from-zinc-100 to-zinc-300 rounded-[30px] grid grid-cols-2">
                            <div className=" absolute mt-24 ml-[-20px] md:ml-[-80px]  w-[120px] md:w-[170px] h-[130px] md:h-[180px] bg-white rounded-[30px] shadow text-center justify-items-center" >
                                <Image
                                    className='mx-auto absolute'
                                    src="/heroBurger.png"
                                    width={450}
                                    height={325}
                                    alt="Picture of the author"
                                    style={{ top: '-60px' }}
                                />
                                <div className="title mt-10 md:mt-20 font-bold">title</div>
                                <div className="description">description</div>
                                <div className="price">price00</div>
                                <button className='w-[42px] h-[42px] relative'>
                                    <IoIosArrowRoundForward className='w-[35px] h-[35px] left-0 top-0 absolute bg-white rounded-full shadow' />
                                </button>
                            </div>
                            <div className=" absolute mt-24 ml-[150px] md:ml-[120px]   w-[120px] md:w-[170px] h-[130px] md:h-[180px] bg-white rounded-[30px] shadow text-center justify-items-center" >
                                <Image
                                    className='mx-auto absolute'
                                    src="/deal.png"
                                    width={450}
                                    height={325}
                                    alt="Picture of the author"
                                    style={{ top: '-60px' }}
                                />
                                <div className="title mt-10 md:mt-20 font-bold">title</div>
                                <div className="description">description</div>
                                <div className="price">price00</div>
                                <button className='w-[42px] h-[42px] relative'>
                                    <IoIosArrowRoundForward className='w-[35px] h-[35px] left-0 top-0 absolute bg-white rounded-full shadow' />
                                </button>
                            </div>
                            <div className=" absolute mt-96 ml-[-20px] md:ml-[-80px] w-[120px] md:w-[170px] h-[130px] md:h-[180px] bg-white rounded-[30px] shadow text-center justify-items-center" >
                                <Image
                                    className='mx-auto absolute'
                                    src="/pizza.png"
                                    width={450}
                                    height={325}
                                    alt="Picture of the author"
                                    style={{ top: '-60px' }}
                                />
                                <div className="title  mt-10 md:mt-20 font-bold">title</div>
                                <div className="description">description</div>
                                <div className="price">price00</div>
                                <button className='w-[42px] h-[42px] relative'>
                                    <IoIosArrowRoundForward className='w-[35px] h-[35px] left-0 top-0 absolute bg-white rounded-full shadow' />
                                </button>
                            </div>
                            <div className=" absolute mt-96 ml-[150px] md:ml-[120px] w-[120px] md:w-[170px] h-[130px] md:h-[180px]  bg-white rounded-[30px] shadow text-center justify-items-center" >
                                <Image
                                    className='mx-auto absolute'
                                    src="/cake.png"
                                    width={450}
                                    height={325}
                                    alt="Picture of the author"
                                    style={{ top: '-60px' }}
                                />
                                <div className="title mt-10 md:mt-20 font-bold">title</div>
                                <div className="description">description</div>
                                <div className="price">price00</div>
                                <button className='w-[42px] h-[42px] relative'>
                                    <IoIosArrowRoundForward className='w-[35px] h-[35px] left-0 top-0  absolute bg-white rounded-full shadow' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero