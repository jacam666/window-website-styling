import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import { Console } from "node:console";
import { ConsultationButton } from "./components/consultationButton";
export default function Home() {
  return (
    <div className=" bg-stone-50  min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Navbar />
        <Header />
        <div className="flex flex-col">
          <div className="my-6">
            <h2 className=" font-sans p-2 text-4xl sm:text-6xl  lg:px-24 font-extrabold text-center text-gray-900">
              Your Trusted Windows & Doors Installation Partner
            </h2>
            <p className="font-sans p-2 text-center text-xl lg:text-2xl mx-2 text-gray-900">
              Enhance your space with our expert window installation services
            </p>
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:my-8 items-center px-4   ">
            <Image
              src="/images/services2-image.avif"
              height={400}
              width={1920}
              alt="main page image"
              priority
              className="rounded-l-xl lg:rounded-r-xl lg:rounded-l-none w-full lg:w-1/2"
            />
            <div className="flex flex-col w-full lg:w-1/2 ">
              <div className="flex flex-col py-4 ">
                <h2 className="font-sans p-2 text-4xl sm:text-6xl py-4  font-extrabold text-center text-gray-900">
                  Quality Materials
                </h2>
                <p className="font-sans p-2 text-center md:p-6 text-xl lg:text-4xl text-gray-900 py-4 mx-4">
                  Sightline Windows, supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row items-center px-4 ">
            <Image
              src="/images/pexels-photo-5691503.webp"
              height={400}
              width={1920}
              alt="main page image"
              priority
              className="rounded-r-xl lg:w-1/2"
            />
            <div className="flex flex-col ">
              <div className="flex flex-col py-4">
                <h2 className="font-sans p-2 text-4xl sm:text-6xl py-4  font-extrabold text-center text-gray-900">
                  Professional Installation
                </h2>
                <p className="font-sans p-2 text-center md:p-6 text-xl lg:text-4xl mx-2 text-gray-900">
                  With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience.
                </p>
              </div>
            </div>
          </div>
          <ConsultationButton />
        </div>
        <div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
