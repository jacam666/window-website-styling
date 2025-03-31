import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { ConsultationButton } from "../components/consultationButton";

export default function About() {
    return (
        <div className="flex flex-col bg-stone-50">
            <Navbar />
            <div className="flex-1  m-2  rounded-lg">
                <h2 className="font-sans text-5xl sm:text-8xl font-extrabold text-center text-gray-900 py-4 ">About Us</h2>
                <div className="space-y-8 md:p-8   mx-4 my-4">
                    <div className="flex flex-col w-full  lg:my-8 items-center px-4">
                        <h2 className="font-sans w-full  p-2 text-center md:p-6 text-xl lg:text-5xl mb-4  mx-2 text-gray-900">
                            Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors.
                        </h2>

                    </div>
                    {/* <div className="bg-sky-900 w-full  rounded-4xl p-4 ">
                        <div className="flex flex-col w-full  lg:mt-6 items-center px-4">
                            <h2 className="font-sans p-2 text-4xl sm:text-6xl  font-extrabold text-center text-white">
                                Trusted By Many
                            </h2>
                            <p className="text-center md:p-6 text-xl lg:text-2xl mx-2 text-white">
                                We are proud to be trusted by numerous clients for our professional window installation services.
                            </p>
                        </div>
                        <Image
                            src="/images/star-ratings (1).png"
                            height={400}
                            width={1020}
                            alt="main page image"
                            priority
                            className="w-full"
                        />
                    </div> */}

                    <div className="w-full bg-white font-bold rounded-lg shadow-lg p-4 outline-1 ">
                        <div className="grid sm:grid-cols-3 gap-4">
                            {/* Card 1 */}
                            <div className="bg-sky-900 rounded-lg shadow-md overflow-hidden">
                                <h3 className="flex font-bold text-lg justify-center pt-8">Customers name</h3>
                                <div className="relative h-36">
                                    <Image
                                        src="/images/star-ratings (1).png"
                                        alt="Sunset Over the Sea"
                                        fill
                                        className=""
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-white text-base">
                                    &quot;Absolutely amazing service and quality. My new windows look fantastic, and the team was professional every step of the way.&quot;
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-sky-900 rounded-lg shadow-md overflow-hidden">
                                <h3 className="flex font-bold text-lg justify-center pt-8">Customers name</h3>
                                <div className="relative h-36">
                                    <Image
                                        src="/images/star-ratings (1).png"
                                        alt="Sunset Over the Sea"
                                        fill
                                        className=""
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-white text-base">
                                        &quot;Efficient and friendly! The installation was prompt, and the trade pricing made it a no-brainer. Highly recommend Sightline Windows. &quot;
                                    </p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-sky-900 rounded-lg shadow-md overflow-hidden">
                                <h3 className="flex font-bold text-lg justify-center pt-8">Customers name</h3>
                                <div className="relative h-36">
                                    <Image
                                        src="/images/star-ratings (1).png"
                                        alt="Sunset Over the Sea"
                                        fill
                                        className=""
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-white text-base">
                                    &quot;Top-notch craftsmanship and outstanding customer service. My home feels transformed thanks to their expert installation.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col py-4">
                        <h2 className="font-sans p-2 text-4xl sm:text-6xl py-4 font-extrabold text-center text-gray-900">
                            Our Beliefs
                        </h2>
                        <div className="flex flex-col w-full md:flex-row lg:my-8 items-center px-2">
                            <p className="text-gray-900 text-xl lg:text-4xl lg:w-1/2 p-2 py-4  ">
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
                        <div className="flex flex-col w-full md:flex-row lg:my-8 items-center px-2">
                            <p className="text-gray-900 text-xl lg:text-4xl lg:w-1/2 p-2 py-4  ">
                                Our comprehensive range of products is designed to meet the needs of both residential and trade customers.
                            </p>
                            <Image
                                src="/images/about-us-page-image.jpeg"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                                className=" w-full md:w-1/2 py-4 rounded-4xl "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col py-4">
                        <h2 className="font-sans p-2 text-4xl sm:text-6xl py-4  font-extrabold text-center text-gray-900">
                            Areas Covered
                        </h2>
                        <div className="flex flex-col w-full md:flex-row lg:my-8 items-center px-2">
                            <p className="text-gray-900 text-xl lg:text-4xl lg:w-1/2 p-2 py-4  ">
                                Our services are available in Leighton Buzzard, Milton Keynes, Dunstable, as well as the wider areas of Hertfordshire, Bedfordshire, Buckinghamshire, and Northants.
                            </p>
                            <Image
                                src="/images/area-map.jpg"
                                height={400}
                                width={1920}
                                alt="main page image"
                                priority
                                className=" w-full md:w-1/2 py-4 rounded-4xl"
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