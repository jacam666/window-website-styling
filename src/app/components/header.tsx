
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className=''>
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
                        <div className="text-white text-center p-2 font-extrabold max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                            <h1 className="text-3xl mx-4 md:text-5xl lg:text-6xl xl:text-7xl ">Quality Window & Door Installation Services at Trade Prices</h1>
                        </div>
                        <div className='flex justify-center items-center py-4'>
                            <a
                                data-mdb-ripple-init
                                className=" flex justify-center items-center  w-1/3 md:w-1/4  btn btn-outline-light font-bold btn-lg p-3 rounded-xl 
                            text-white bg-sky-600  hover:bg-sky-400 hover:text-gray-900 transition-colors duration-300 ease-in-out "
                                href="/about"
                                role="button"

                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
