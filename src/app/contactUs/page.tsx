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
            <div className='p-6'
            style={{
                backgroundImage:"url('/images/bg-image3.jpeg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
            
            >
                <h1 className='text-white text-4xl md:text-7xl p-8 text-center'>
                    Let&apos;s Discuss Your Next Project
                </h1>
                <p className='text-white text-center text-xl md:text-3xl p-8'>
                    Fill out the form, or call us to
                    set up a free in-home consultation.
                    Or to request a brochure
                </p>

                <div className="flex flex-col md:flex-row justify-evenly p-4">
                    <Contact />
                    <div className="flex flex-col  py-6">
                        <h3 className="underline font-bold text-lg lg:text-3xl mb-2  text-white">Areas Covered:</h3>
                        <ul className="list-disc list-inside text-base lg:text-2xl  text-white">
                            <li className='text-white'>Leighton Buzzard</li>
                            <li className='text-white'>Milton Keynes</li>
                            <li className='text-white'>Dunstable</li>
                            <li className='text-white'>Hertfordshire</li>
                            <li className='text-white'>Bedfordshire</li>
                            <li className='text-white'>Buckinghamshire</li>
                            <li className='text-white'>Northants</li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-white lg:text-2xl text-center py-6">
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
            <Footer />
        </div>
    );
}