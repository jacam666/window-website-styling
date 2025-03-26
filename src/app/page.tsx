import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Header from "./components/header";
export default function Home() {
  return (
    <div className=" bg-stone-50  min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Navbar />
        <Header />
        <div className="flex flex-col">
          <div>
            <h2 className="  p-2 text-2xl lg:text-4xl xl:text-5xl font-bold my-6 text-center text-gray-900">
              Your Trusted Windows & Doors Installation Partner
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center mx-2   ">
            <Image
              src="/images/services2-image.avif"
              height={400}
              width={1920}
              alt="main page image"
              priority
              className="rounded-lg"
            />
            <div className="flex flex-col ">
              <p className="font-sans py-6 md:p-6 text-xl lg:text-2xl mx-2   text-gray-900">
                Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors. With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience.
              </p>
              <a
                data-mdb-ripple-init
                className="flex justify-center w-1/3 mx-auto my-4 md:w-1/4 btn btn-outline-light font-bold btn-lg p-3 rounded-xl text-gray-900 bg-stone-300  hover:bg-stone-200  "
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
