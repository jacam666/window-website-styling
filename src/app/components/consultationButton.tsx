export function ConsultationButton() {
    return (
        <div className="py-8 m-4 outline-1 outline-gray-900 rounded-3xl bg-sky-900 lg:py-24">
            <h2 className="font-sans p-4 text-4xl sm:text-6xl  font-bold text-center text-white">
                Contact us for a free consultation
            </h2>
            <a
                data-mdb-ripple-init
                className="flex justify-center w-1/3 mx-auto my-4 md:w-1/4 xl:w-1/6 btn btn-outline-light font-bold btn-lg p-3 rounded-xl text-white bg-sky-600  hover:bg-sky-400 hover:text-gray-900 transition-colors duration-300 ease-in-out "
                href="/contactUs"
                role="button"
            >
                Contact Us
            </a>
        </div>
    )
}