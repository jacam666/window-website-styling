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
            <h2 className="p-2 text-2xl lg:text-4xl my-6 text-center text-white">
              Your Trusted Windows & Doors Installation Partner
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center p-2 bg-gray-700 ">
            <Image
              src="/images/mainPage-Image.avif"
              height={400}
              width={1920}
              alt="main page image"
              priority
            />
            <div className="flex flex-col ">
              <h4 className="p-8 text-xl lg:text-2xl  text-white">
                Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors. With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience.
              </h4>
              <a
                data-mdb-ripple-init
                className="flex justify-center mx-auto my-4 w-1/4 btn btn-outline-light btn-lg p-3 rounded-full  bg-gray-800  hover:bg-gray-600  "
                href="#!"
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
