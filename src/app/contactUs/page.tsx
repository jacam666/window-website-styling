// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/footer';
// import Contact from '../components/contact';
// import Slider from '../components/RatingsSlider';



// export default function ContactUs() {
//     return (
//         <div className="flex flex-col bg-gradient-to-r from-sky-900 to-sky-700 ">
//             <Navbar />
//             <div className=" min-h-screen flex flex-col w-full  lg:p-16 items-center px-4">
//                 <h2 className='font-sans text-3xl lg:text-6xl font-extrabold text-center text-white py-4'>
//                     Let&apos;s Discuss Your Next Project
//                 </h2>
//                 <h3 className='font-sans w-full p-2 text-center md:p-6 text-xl md:text-3xl xl:text-5xl  mx-auto mb-4 text-white'>
//                     Fill out the form, or call us to
//                     set up a free in-home consultation.
//                     Or to request a brochure
//                 </h3>

//                 <div className="flex flex-col md:flex-row justify-evenly  p-12 mx-2 rounded-xl">
//                     <div className='backdrop-blur-lg bg-white/70 rounded-xl shadow-2xl p-6'>
//                     <Contact />

//                     </div>
//                     <div className='flex flex-col my-8 rounded-lg  p-4'>
//                         <div className="flex flex-col   py-6">
//                             <h3 className="underline font-bold text-lg lg:text-3xl mb-4  text-center md:text-left text-white">Areas Covered:</h3>
//                             <ul className="list-disc list-inside text-base text-center md:text-left lg:text-2xl">
//                                 <li className='text-white'>Leighton Buzzard</li>
//                                 <li className='text-white'>Milton Keynes</li>
//                                 <li className='text-white'>Dunstable</li>
//                                 <li className='text-white'>Hertfordshire</li>
//                                 <li className='text-white'>Bedfordshire</li>
//                                 <li className='text-white'>Buckinghamshire</li>
//                                 <li className='text-white'>Northants</li>
//                             </ul>
//                         </div>
//                         <div className="flex flex-col text-white  lg:text-2xl text-center py-6">
//                             <p className='text-white'>
//                                 <i className="fa-solid fa-envelope mr-2 text-white"></i>
//                                 sightlinewindowsltd@gmail.com
//                             </p>
//                             <p className='text-white'>
//                                 <i className="fa-solid fa-phone mr-4 text-white"></i>
//                                 07538800369
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div>
//                 <Slider />
//             </div>
//             <Footer />
//         </div>
//     );
// }
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Contact from '../components/contact';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Slider from '../components/RatingsSlider';



export default function ContactUs() {
    return (
        <div className="flex flex-col bg-gradient-to-r from-sky-900 to-sky-700 ">
            <Navbar />
            <div className="min-h-screen flex w-full flex-col bg-gradient-to-r from-sky-900 to-sky-700 lg:p-16 px-4 items-center">
                <h2 className='font-sans text-3xl lg:text-6xl font-extrabold text-center text-white py-4'>
                    Let&apos;s Discuss Your Next Project
                </h2>
                <h3 className='font-sans text-xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl'>
                    Fill out the form, call us, or request a free in-home consultation or brochure.
                </h3>

                <div className="flex flex-col lg:flex-row items-center justify-around w-full my-10 gap-8">
                    <div className="backdrop-blur-lg bg-white/20 rounded-xl shadow-2xl p-6">
                        <Contact />
                    </div>
                    <div className='flex flex-col backdrop-blur-lg bg-white/10 rounded-xl shadow-2xl p-6 animate-float'>
                        <h3 className="text-2xl lg:text-3xl text-center font-bold text-white underline mb-4">Areas Covered:</h3>
                        <ul className="list-inside space-y-2 text-center text-lg lg:text-2xl text-white">
                            {['Leighton Buzzard', 'Milton Keynes', 'Dunstable', 'Hertfordshire', 'Bedfordshire', 'Buckinghamshire', 'Northants'].map(area => (
                                <li key={area}>
                                    <MapPinIcon className="inline-block h-5 w-5 mr-2" />
                                    {area}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 space-y-4 text-lg lg:text-2xl text-center text-white">
                            <p className='flex items-center justify-center'>
                                <EnvelopeIcon className="w-6 h-6 mr-2" />
                                sightlinewindowsltd@gmail.com
                            </p>
                            <p className='flex items-center justify-center'>
                                <PhoneIcon className="w-6 h-6 mr-2" />
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