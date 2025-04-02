import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-50 text-center">
            <div className="container items-center  p-4 pb-0">
                <section className="mb-4 flex justify-evenly items-center w-3/4 mx-auto mt-6">
                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1 rounded-sm"
                        style={{ backgroundColor: '#3b5998' }}
                        href="https://facebook.com"
                        role="button"
                    >
                        <i className="fab fa-facebook-f text-xl p-1 "></i>
                    </a>

                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1 rounded-sm"
                        style={{ backgroundColor: '#55acee' }}
                        href="https://twitter.com"
                        role="button"
                    >
                        <i className="fab fa-twitter text-xl p-1"></i>
                    </a>

                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1 rounded-sm"
                        style={{ backgroundColor: '#dd4b39' }}
                        href="https://google.com"
                        role="button"
                    >
                        <i className="fab fa-google text-xl p-1"></i>
                    </a>

                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1 rounded-sm"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="https://instagram.com"
                        role="button"
                    >
                        <i className="fab fa-instagram text-xl p-1"></i>
                    </a>

                    {/* <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1 rounded-sm"
                        style={{ backgroundColor: '#0082ca' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in text-xl p-1"></i>
                    </a>

                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1 rounded-sm"
                        style={{ backgroundColor: '#333333' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-github text-xl p-1"></i>
                    </a> */}
                </section>
            </div>

            {/* Copyright */}
            <div className="text-center p-12 text-gray-900 font-bold text-lg">
                © 2025 Copyright: 
                <a className="text-body ml-2" href="#!">
                    CamDesigns
                </a>
            </div>
        </footer>
    );
};

export default Footer;
