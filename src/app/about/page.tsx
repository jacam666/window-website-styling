import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-8 bg-gray-700">
                <h1 className="text-7xl text-center my-8 p-6">Welcome to Sightline Windows</h1>
                <div className="space-y-4 p-5 text-white text-center lg:w-5/6 lg:text-xl mx-auto my-4">
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

            </div>
        </div>

    )
}