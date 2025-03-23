import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-center">
            {/* Grid container */}
            <div className="container p-4 pb-0">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Facebook */}
                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    {/* Twitter */}
                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#55acee' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    {/* Google */}
                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#dd4b39' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    {/* Instagram */}
                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    {/* Linkedin */}
                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    {/* Github */}
                    <a
                        data-mdb-ripple-init={true}
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#333333' }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </section>
                {/* Section: Social media */}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2025 Copyright: 
                <a className="text-body ml-2" href="#!">
                    CamDesigns
                </a>
            </div>
            {/* Copyright */}
        </footer>
    );
};

export default Footer;
