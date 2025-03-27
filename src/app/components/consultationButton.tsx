export function ConsultationButton() {
    return (
        <div className="py-8 m-4 outline-1 outline-gray-900 rounded-3xl bg-stone-200 lg:py-24">
            <h2 className="font-sans p-4 text-4xl sm:text-6xl  font-bold text-center text-gray-900">
                Contact us for a free consultation
            </h2>
            <a
                data-mdb-ripple-init
                className="flex justify-center w-1/3 mx-auto my-4 md:w-1/4 btn btn-outline-light font-bold btn-lg p-3 rounded-xl text-gray-900 bg-stone-300  hover:bg-stone-400  "
                href="/contactUs"
                role="button"
            >
                Contact Us
            </a>
        </div>
    )
}