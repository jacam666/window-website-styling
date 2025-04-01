import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { ConsultationButton } from "../components/consultationButton";
import CardWrapper from "../components/CardWrapper";
import Card from "../components/card";
//import StarRating from "../components/StarRating";

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

                    {/* <div className="w-full bg-white font-bold rounded-lg shadow-lg p-4 ">
                        <div className="grid sm:grid-cols-3 gap-4">
                            
                            <div className="bg-sky-900 rounded-lg shadow-md overflow-hidden">
                                <h3 className="flex font-bold text-xl justify-center pt-8">Customers name</h3>
                                <div className="relative h-36">
                                    <Image
                                        src="/images/star-ratings (1).png"
                                        alt="Sunset Over the Sea"
                                        fill
                                        className=" px-8"
                                    />
                                </div>
                                <div className="pb-4">
                                    <p className="text-white text-base px-4 text-center">
                                        &quot;Absolutely amazing service and quality. My new windows look fantastic, and the team was professional every step of the way.&quot;
                                    </p>
                                </div>
                            </div>
                            <div className="bg-sky-900 rounded-lg shadow-md overflow-hidden">
                                <h3 className="flex font-bold text-xl justify-center pt-8">Customers name</h3>
                                <div className="relative h-36">
                                    <Image
                                        src="/images/star-ratings (1).png"
                                        alt="Sunset Over the Sea"
                                        fill
                                        className="px-8"
                                    />
                                </div>
                                <div className="pb-4">
                                    <p className="text-white text-base px-4 text-center">
                                        &quot;Efficient and friendly! The installation was prompt, and the trade pricing made it a no-brainer. Highly recommend Sightline Windows. &quot;
                                    </p>
                                </div>
                            </div>
                            
                            <div className="bg-sky-900 rounded-lg shadow-md overflow-hidden">
                                <h3 className="flex font-bold text-xl justify-center pt-8">Customers name</h3>
                                <div className="relative h-36">
                                    <Image
                                        src="/images/star-ratings (1).png"
                                        alt="Sunset Over the Sea"
                                        fill
                                        className="px-8"
                                    />
                                </div>
                                <div className="pb-4">
                                    <p className="text-white text-base text-center px-4">
                                        &quot;Top-notch craftsmanship and outstanding customer service. My home feels transformed thanks to their expert installation.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex flex-col sm:flex-row gap-6 p-6  xl:w-5/6 xl:justify-evenly xl:mx-auto bg-gray-50">
                        <CardWrapper>
                            <Card
                                title="John Major : "
                                desc='&quot;Absolutely amazing service and quality. My new windows look fantastic.&quot; - Dennis Ritchie'
                                className="px-6 py-10 mx-auto rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl"
                            />
                        </CardWrapper>
                        <CardWrapper>
                            <Card
                                title="Boris Johnson : "
                                desc='"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie'
                                className="px-6 py-10 mx-auto rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl"
                            />
                        </CardWrapper>
                        <CardWrapper>
                            <Card
                                title="Vlad Putin : "
                                desc='"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie'
                                className="px-6 py-10 mx-auto rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl"
                            />
                        </CardWrapper>
                    </div>

                    <div className="flex flex-col my-8">
                        <h2 className="font-sans m-6 text-4xl sm:text-6xl py-4 mb-12 font-extrabold text-center text-gray-900">
                            Our Beliefs
                        </h2>
                        <div className="flex flex-col md:flex-row items-center  shadow-xl rounded-xl outline-1 outline-gray-300 bg-stone-100 ">
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src="/images/services3-image.avif"
                                    height={400}
                                    width={1920}
                                    alt="main page image"
                                    priority
                                    className="w-full rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col text-center font-medium space-y-4 py-4">
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
                            <div className="w-full lg:w-1/2 flex flex-col text-center font-medium space-y-4 py-4">
                                <p className=" text-2xl p-4 lg:text-4xl lg:px-16 text-gray-900">
                                    Our services are available in Leighton Buzzard, Milton Keynes, Dunstable, as well as the wider areas of Hertfordshire, Bedfordshire, Buckinghamshire, and Northants.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <ConsultationButton />
            <Footer />
        </div>
    )
}