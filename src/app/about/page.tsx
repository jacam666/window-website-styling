import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto  bg-gray-700">
                <h1 className=" text-4xl md:text-7xl text-center  p-8">Welcome to Sightline Windows</h1>
                <div className="space-y-8 md:p-8  text-white text-center lg:text-xl mx-4 my-4">
                    <p>
                        Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors.
                    </p>
                    <p>
                        With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience. As a trade customer, you can benefit from our specialized supply of UPVC and aluminium windows, ensuring top-notch quality and competitive prices.
                    </p>
                    <p>
                        Our comprehensive range of products is designed to meet the needs of both residential and trade customers. In addition to windows and doors, we also offer composite doors, lanterns, and bifold doors, providing stylish and durable options to enhance the appearance and functionality of any property.
                    </p>
                    <p>
                        Our services are available in Leighton Buzzard, Milton Keynes, Dunstable, as well as the wider areas of Hertfordshire, Bedfordshire, Buckinghamshire, and Northants. At Sightline Windows, we take pride in delivering exceptional customer service and top-quality products to meet all your window and door needs.
                    </p>
                </div>
                <div className="flex flex-col bg-white p-4">
                    <p className="bg-white text-black text-center pt-12 lg:text-3xl mx-auto px-24 ">
                        Contact us today to discuss your requirements and let us help you transform your space.
                    </p>
                    <a
                        data-mdb-ripple-init
                        className="flex justify-center mx-auto my-4 lg:w-1/4 btn btn-outline-light btn-lg p-3 rounded-xl  bg-gray-800  hover:bg-gray-600  "
                        href="/contactUs"
                        role="button"
                    >
                        Get A Free Consultation
                    </a>
                </div>
            </div>
        </div>
    )
}