import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Contact from '../components/contact';



export default function ContactUs() {
    return (
        <div className="">
            <div>
                <Navbar />
            </div>
            <div className="bg-stone-50">
                <h2 className='text-gray-900 text-5xl sm:text-8xl font-extrabold p-8 text-center'>
                    Let&apos;s Discuss Your Next Project
                </h2>
                <p className='font-sans p-2 text-center md:p-6 text-xl lg:text-5xl mb-4  mx-2 text-gray-900'>
                    Fill out the form, or call us to
                    set up a free in-home consultation.
                    Or to request a brochure
                </p>

                <div className="flex flex-col md:flex-row justify-evenly bg-sky-900 p-12 mx-2 rounded-xl">
                    <Contact />
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
            <Footer />
        </div>
    );
}