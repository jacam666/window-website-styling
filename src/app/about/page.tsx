import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { ConsultationButton } from "../components/consultationButton";
//import Slider from "../components/RatingsSlider";

export default function About() {
    return (
        <div className="flex flex-col bg-stone-50">
            <Navbar />
            <div className="flex flex-col w-full bg-gradient-to-r from-sky-900 to-sky-700 py-4 items-center">
                    <h2 className="font-sans text-3xl lg:text-6xl font-extrabold text-center text-white py-4">
                        About Us
                    </h2>
                    <h3 className="font-sans w-full p-2 text-center md:p-6 text-lg md:text-2xl md:px-16 xl:text-4xl px-4 mb-4 text-white">
                        Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors.
                    </h3>
            </div>
            <div className="flex-1  rounded-lg">
                <div className="space-y-8  md:p-8 mx-4 ">
                    <div className="flex flex-col">
                        <h2 className="font-sans m-6 text-4xl sm:text-6xl py-4 mb-12 font-extrabold text-center  text-gray-900">
                            Our Beliefs
                        </h2>
                        <div className="flex flex-col md:flex-row items-center shadow-xl rounded-xl outline-1 outline-gray-300 bg-stone-100 ">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src="/images/services3-image.avif"
                                    height={400}
                                    width={1920}
                                    alt="main page image"
                                    priority
                                    className=" w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col text-center font-medium space-y-4 ">
                                <p className=" text-2xl p-4 lg:text-4xl lg:px-16 text-gray-900">
                                    With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-8">
                        <h2 className="font-sans m-6 text-4xl sm:text-6xl py-4 mb-12 font-extrabold text-center text-gray-900">
                            Efficient installations
                        </h2>
                        <div className="flex flex-col md:flex-row items-center  shadow-xl rounded-xl outline-1 outline-gray-300 bg-stone-100 ">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src="/images/about-us-page-image.jpeg"
                                    height={400}
                                    width={1920}
                                    alt="main page image"
                                    priority
                                    className="w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col text-center font-medium space-y-4 py-4">
                                <p className=" text-2xl p-4 lg:text-4xl lg:px-16 text-gray-900">
                                    Our comprehensive range of products is designed to meet the needs of both residential and trade customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-8">
                        <h2 className="font-sans m-6 text-4xl sm:text-6xl py-4 mb-12 font-extrabold text-center text-gray-900">
                            Areas Covered
                        </h2>
                        <div className="flex flex-col md:flex-row items-center  shadow-xl rounded-xl outline-1 outline-gray-300 bg-stone-100 ">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src="/images/area-map.jpg"
                                    height={400}
                                    width={1920}
                                    alt="main page image"
                                    priority
                                    className="w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col text-center font-medium space-y-4">
                                <p className=" text-2xl  lg:text-4xl lg:px-16 text-gray-900">
                                    Our services are available in Leighton Buzzard, Milton Keynes, Dunstable, as well as the wider areas of Hertfordshire, Bedfordshire, Buckinghamshire, and Northants.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <Slider /> */}
            </div>
            <ConsultationButton />
            <Footer />
        </div >
    )
}