
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className='bg-gray-700'>
            <div className="relative">
                <Image
                    src="/images/mainPage-Image.avif"
                    height={300}
                    width={1920}
                    alt="main page image"
                    priority
                />
                <div
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                    <div>
                        <div className="text-white text-center p-2 max-w-2xl lg:max-w-4xl">
                            <h1 className=" text-3xl mx-4 md:text-5xl lg:text-6xl">Quality Window & Door Installation Services at Trade Prices</h1>
                        </div>
                        <div className='flex justify-center pt-8'>
                        <a
                            data-mdb-ripple-init
                            className=" flex justify-center items-center mx-auto my-4 md:w-1/4 btn btn-outline-light btn-lg p-3 rounded-xl text-white  bg-cyan-900  hover:bg-cyan-600  "
                            href="#!"
                            role="button"
                        >
                            Get a free quote
                        </a>
                        </div>
                        
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
