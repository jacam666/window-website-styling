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
            <div className='bg-gray-700 p-6'>
                <h1 className='text-white text-4xl md:text-7xl p-8 text-center'>
                    Let&apos;s Discuss Your Next Project
                </h1>
                <p className='text-white text-center text-xl md:text-3xl p-8'>
                    Fill out the form, or call us to
                    set up a free in-home consultation.
                    Or to request a brochure
                </p>

                <div className="flex flex-col lg:flex-row justify-evenly p-4">
                    <Contact />
                    <div className="flex flex-col py-6">
                        <h3 className="underline font-bold text-lg mb-2 text-white">Areas Covered:</h3>
                        <ul className="list-disc list-inside text-base">
                            <li>Leighton Buzzard</li>
                            <li>Milton Keynes</li>
                            <li>Dunstable</li>
                            <li>Hertfordshire</li>
                            <li>Bedfordshire</li>
                            <li>Buckinghamshire</li>
                            <li>Northants</li>
                        </ul>
                    </div>
                    <div className="flex flex-col  text-center">
                        <p>
                        <i className="fa-solid fa-envelope mr-2"></i>
                            sightlinewindowsltd@gmail.com
                        </p>
                        <p>
                        <i className="fa-solid fa-phone mr-4"></i>
                            07538800369
                            </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}