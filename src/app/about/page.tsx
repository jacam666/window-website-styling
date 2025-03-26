import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="flex flex-col bg-stone-50">
            <Navbar />
            <div className="flex-1  m-2  rounded-lg">
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-center text-gray-900  py-8 ">Welcome to Sightline Windows</h1>
                <div className="space-y-8 md:p-8  text-black text-center lg:text-xl mx-4 my-4">
                    <p className="text-black text-xl lg:text-2xl lg:mx-20">
                        Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors.
                    </p>
                    <p className="text-black text-xl lg:text-2xl lg:mx-20 ">
                        With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience. As a trade customer, you can benefit from our specialized supply of UPVC and aluminium windows, ensuring top-notch quality and competitive prices.
                    </p>
                    <p className="text-black text-xl lg:text-2xl lg:mx-20 ">
                        Our comprehensive range of products is designed to meet the needs of both residential and trade customers. In addition to windows and doors, we also offer composite doors, lanterns, and bifold doors, providing stylish and durable options to enhance the appearance and functionality of any property.
                    </p>
                    <p className="text-black text-xl  lg:text-2xl lg:mx-20">
                        Our services are available in Leighton Buzzard, Milton Keynes, Dunstable, as well as the wider areas of Hertfordshire, Bedfordshire, Buckinghamshire, and Northants. At Sightline Windows, we take pride in delivering exceptional customer service and top-quality products to meet all your window and door needs.
                    </p>
                </div>
                <div className="flex flex-col  px-4">
                    <p className=" text-black text-center text-xl pt-6 lg:text-4xl lg:px-16  ">
                        Contact us today to discuss your requirements and let us help you transform your space.
                    </p>
                    <a
                        data-mdb-ripple-init
                        className="flex justify-center mx-auto my-16 lg:w-1/4 lg:text-lg btn btn-outline-light btn-lg p-3 rounded-xl text-black  bg-cyan-950  hover:bg-gray-600  "
                        href="/contactUs"
                        role="button"
                    >
                        Get A Free Consultation
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}