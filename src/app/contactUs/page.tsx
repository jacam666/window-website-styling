import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Slider from '../components/RatingsSlider';



export default function ContactUs() {
    return (
        <div className="flex flex-col bg-gradient-to-r from-sky-900 to-sky-700 ">
            <Navbar />
            <div className=" min-h-screen flex flex-col w-full  lg:p-16 items-center px-4">
                <h2 className='font-sans text-3xl lg:text-6xl font-extrabold text-center text-white py-4'>
                    Let&apos;s Discuss Your Next Project
                </h2>
                <h3 className='font-sans w-full p-2 text-center md:p-6 text-xl md:text-3xl xl:text-5xl  mx-auto mb-4 text-white'>
                    Fill out the form, or call us to
                    set up a free in-home consultation.
                    Or to request a brochure
                </h3>

                <div className="flex flex-col md:flex-row justify-evenly bg:white sm:bg-gradient-to-r from-sky-900 to-sky-700 p-12 mx-2 rounded-xl">
                    <div className='backdrop-blur-lg bg-white/70 rounded-xl shadow-2xl p-6'>
                    <Contact />

                    </div>
                    <div className='flex flex-col my-8 rounded-lg  p-4'>
                        <div className="flex flex-col   py-6">
                            <h3 className="underline font-bold text-lg lg:text-3xl mb-4  text-center md:text-left text-white">Areas Covered:</h3>
                            <ul className="list-disc list-inside text-base text-center md:text-left lg:text-2xl">
                                <li className='text-white'>Leighton Buzzard</li>
                                <li className='text-white'>Milton Keynes</li>
                                <li className='text-white'>Dunstable</li>
                                <li className='text-white'>Hertfordshire</li>
                                <li className='text-white'>Bedfordshire</li>
                                <li className='text-white'>Buckinghamshire</li>
                                <li className='text-white'>Northants</li>
                            </ul>
                        </div>
                        <div className="flex flex-col text-white  lg:text-2xl text-center py-6">
                            <p className='text-white'>
                                <i className="fa-solid fa-envelope mr-2 text-white"></i>
                                sightlinewindowsltd@gmail.com
                            </p>
                            <p className='text-white'>
                                <i className="fa-solid fa-phone mr-4 text-white"></i>
                                07538800369
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Slider />
            </div>
            <Footer />
        </div>
    );
}