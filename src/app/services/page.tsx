import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';


export default function Services() {
    return (

        <div
            className="min-h-screen bg-cover bg-center">
            <Navbar />
            <div className='py-4 bg-gradient-to-r from-sky-900 to-sky-700'>
                    <h2 className=' font-sans text-3xl px-4 lg:text-6xl font-extrabold text-center text-white py-4 '>
                        Expert Window Installation Services
                    </h2>
                    <h3 className='bg-gradient-to-r from-sky-900 to-sky-700 font-sans w-full p-2 text-center md:p-6 text-lg md:text-2xl md:px-16 xl:text-4xl px-4 mb-4 text-white'>
                        With 20 years experience in the trade you can be sure of an outstanding Design/Sale to project managed installation experience. With the added benefit of trade pricing
                    </h3>
                </div>
            <div className='flex flex-col bg-stone-50 px-4'>
                
                <div className="flex flex-col my-8">
                    <div className="flex flex-col md:flex-row items-center  shadow-xl rounded-xl outline-1 outline-gray-300 bg-stone-100">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/images/services1-image.avif"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                                className=' w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl'
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col font-medium text-center space-y-4 py-4 ">
                            <h1 className="p-2 text-2xl lg:text-5xl text-black"><i className="fa-solid fa-screwdriver-wrench mr-4"></i>Supply and Fit</h1>
                            <h1 className="p-2 text-2xl lg:text-3xl text-black">UPVC/Aluminium Windows  French Doors</h1>
                            <h1 className="p-2 text-2xl lg:text-3xl text-black">UPVC Doors</h1>
                            <h1 className="p-2 text-2xl lg:text-3xl text-black">Patio Doors</h1>
                        </div>
                    </div>
                </div>

                {/* <div className="h-1 bg-black my-4 w-3/4 mx-auto"></div> */}

                <div className="flex flex-col my-8">
                    <div className="flex flex-col md:flex-row items-center  shadow-xl rounded-xl outline-1 outline-gray-300 bg-stone-100">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/images/services2-image.avif"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                                className=' w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl'
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col font-medium text-center space-y-4 py-4 ">
                            <h1 className="p-2 text-2xl lg:text-5xl text-black"><i className="fa-brands fa-windows mr-4"></i>Trade only</h1>
                            <h1 className="p-2 text-2xl lg:text-3xl text-black">UPVC and Aluminium Windows</h1>
                        </div>
                    </div>
                </div>

                {/* <div className="h-1 bg-black my-4 w-3/4 mx-auto"></div> */}

                <div className="flex flex-col my-8">
                    <div className="flex flex-col md:flex-row items-center  shadow-xl rounded-xl outline-1 outline-gray-300 bg-stone-100 ">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/images/services3-image.avif"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                                className=' w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl'
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col text-center font-medium space-y-4 py-4">
                            <h1 className="p-2 text-2xl lg:text-5xl text-black"><i className="fa-solid fa-door-open mr-4"></i>Trade only</h1>
                            <h1 className="p-2 text-2xl lg:text-3xl text-black">Composite Doors</h1>
                            <h1 className="p-2 text-2xl lg:text-3xl text-black">Lanterns</h1>
                            <h1 className="p-2 text-2xl lg:text-3xl text-black">Bifold Doors</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4 bg-gradient-to-r from-sky-900 to-sky-700'>
            <h3 className="bg-gradient-to-r from-sky-900 to-sky-700 font-sans w-full p-2 text-center md:p-6 text-xl lg:text-5xl mb-4 text-white px-4">
                    Enhance the beauty and functionality of your home with our top-notch window installation services. Let us help you bring your vision to life with custom window solutions tailored to your needs.
                </h3>
            </div>
            <Footer />
        </div >
    );
}