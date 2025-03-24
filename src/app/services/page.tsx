import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';


export default function Services() {
    return (
        <div>
            <Navbar />
            <div className='  bg-white'>
                <div>
                    <h1 className=' text-black text-4xl md:text-7xl text-center md:mx-12 p-12'>
                        Expert Window Installation Services
                    </h1>
                    <p className='space-y-8 px-8 md:p-8 text-black text-center md:text-3xl md:mx-12 mb-4'>
                        With 20 years experience in the trade you can be sure of an outstanding Design/Sale to project managed installation experience. With the added benefit of trade pricing
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row items-center p-2 bg-white">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/images/services1-image.avif"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col text-center space-y-4 py-4">
                            <p className="p-2 text-xl lg:text-5xl text-black">Supply and Fit</p>
                            <p className="p-2 text-xl lg:text-2xl text-black">UPVC/Aluminium Windows  French Doors</p>
                            <p className="p-2 text-xl lg:text-2xl text-black">UPVC Doors</p>
                            <p className="p-2 text-xl lg:text-2xl text-black">Patio Doors</p>
                        </div>
                    </div>
                </div>

                <div className="h-1 bg-black my-4 w-3/4 mx-auto"></div>

                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row items-center p-2 bg-white">
                    <div className="w-full lg:w-1/2">
                            <Image
                                src="/images/services2-image.avif"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                            />
                        </div>
                    <div className="w-full lg:w-1/2 flex flex-col text-center space-y-4 py-4">
                            <p className="p-2 text-xl lg:text-5xl text-black">Trade only</p>
                            <p className="p-2 text-xl lg:text-2xl text-black">UPVC and Aluminium Windows</p>
                        </div>
                        
                    </div>
                </div>

                <div className="h-1 bg-black my-4 w-3/4 mx-auto"></div>

                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row items-center p-2 bg-white">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/images/services3-image.avif"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col text-center space-y-4 py-4">
                            <p className="p-2 text-xl lg:text-5xl text-black">Trade only</p>
                            <p className="p-2 text-xl lg:text-2xl text-black">Composite Doors</p>
                            <p className="p-2 text-xl lg:text-2xl text-black">Lanterns</p>
                            <p className="p-2 text-xl lg:text-2xl text-black">Bifold Doors</p>
                        </div>
                    </div>
                </div>
                <h1 className="bg-cyan-950 text-white text-lg md:text-4xl text-center p-4 md:p-12">
                Enhance the beauty and functionality of your home with our top-notch window installation services. Let us help you bring your vision to life with custom window solutions tailored to your needs.
                    </h1>
            </div>
            <Footer />
        </div >
    );
}