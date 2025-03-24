import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Header from "./components/header";
export default function Home() {
  return (
    <div className=" bg-gray-800  min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Navbar />
        <Header />
        <div className="flex flex-col">
          <div>
            <h1 className="p-2 text-2xl lg:text-4xl my-6 text-center text-white">
              Your Trusted Windows and Doors Installation Partner
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center p-2 bg-gray-700 ">
            <Image
              src="/images/services2-image.avif"
              height={400}
              width={1920}
              alt="main page image"
              priority
            />
            <div className="flex flex-col ">
              <h1 className="p-6 text-xl lg:text-2xl text-center  text-white">
                Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors. With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience.
              </h1>
              <a
                data-mdb-ripple-init
                className="flex justify-center mx-auto my-4 md:w-1/4 btn btn-outline-light btn-lg p-3 rounded-xl text-white bg-gray-800  hover:bg-gray-600  "
                href="/about"
                role="button"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>
        <div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
