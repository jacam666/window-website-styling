import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { ConsultationButton } from "../components/consultationButton";

export default function About() {
    return (
        <div className="flex flex-col bg-stone-50">
            <Navbar />
            <div className="flex-1  m-2  rounded-lg">
                <h2 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center text-gray-900 py-4 ">About Us</h2>
                <div className="space-y-8 md:p-8  text-black text-center lg:text-xl mx-4 my-4">

                    <div className="flex flex-col w-full lg:flex-row lg:my-8 items-center px-4">
                        <p className="font-sans w-full lg:w-1/2 p-2 text-center md:p-6 text-xl lg:text-5xl mb-4  mx-2 text-gray-900">
                            Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors.
                        </p>
                        <div className="bg-sky-950 w-full lg:w-1/2 rounded-4xl p-4">
                            <h2 className="font-sans p-2 text-4xl sm:text-6xl  font-extrabold text-center text-white">
                                Trusted By Many
                            </h2>
                            <p className="text-center my-4 md:p-6 text-xl lg:text-2xl mx-2 text-white">
                                We are proud to be trusted by numerous clients for our professional window installation services.
                            </p>
                            <Image
                                src="/images/star-ratings (1).png"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col py-4">
                        <h2 className="font-sans p-2 text-4xl sm:text-6xl py-4  font-extrabold text-center text-gray-900">
                            Our Beliefs
                        </h2>
                        <div className="flex flex-col w-full lg:flex-row lg:my-8 items-center px-4">
                            <p className="text-gray-900 text-xl lg:text-5xl lg:w-1/2 p-2 py-4 mx-4 ">
                                With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience.
                            </p>
                            <Image
                                src="/images/services3-image.avif"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                                className=" w-full lg:w-1/2 py-4 rounded-4xl"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col py-4">
                    <h2 className="font-sans p-2 text-4xl sm:text-6xl py-4  font-extrabold text-center text-gray-900">
                                Efficient installations
                            </h2>
                        <div className="flex flex-col w-full lg:flex-row lg:my-8 items-center px-4">
                            
                            <p className="text-gray-900 text-xl lg:text-5xl lg:w-1/2 p-2 py-4 mx-4 ">
                                Our comprehensive range of products is designed to meet the needs of both residential and trade customers.
                            </p>
                            <Image
                                src="/images/about-us2.webp"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                                className=" w-full lg:w-1/2 py-4 rounded-4xl"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col py-4">
                        <h2 className="font-sans p-2 text-4xl sm:text-6xl py-4  font-extrabold text-center text-gray-900">
                            Areas Covered
                        </h2>
                        <div className="flex flex-col w-full lg:flex-row lg:my-8 items-center px-4">
                        <p className="text-gray-900 text-xl lg:text-4xl lg:w-1/2 p-2 py-4 mx-4">
                            Our services are available in Leighton Buzzard, Milton Keynes, Dunstable, as well as the wider areas of Hertfordshire, Bedfordshire, Buckinghamshire, and Northants. At Sightline Windows, we take pride in delivering exceptional customer service and top-quality products to meet all your window and door needs.
                        </p>
                        <Image
                            src="/images/area-map.jpg"
                            height={400}
                            width={1920}
                            alt="main page image"
                            priority
                            className=" w-full lg:w-1/2 py-4 rounded-4xl"
                        />
                        </div>
                    </div>

                </div>
            </div>
            <ConsultationButton />
            <Footer />
        </div>
    )
}