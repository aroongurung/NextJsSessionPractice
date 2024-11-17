import Image from "next/image"

const ReviewInfo = () => {
    return (
        <>
            <div className="container pt-16 pb-16 mt-20">
                <h2 className="font-medium text-2xl pb-4 text-center">Customer Reviews</h2>
                <div className="grid lg:grid-cols-[18.75rem, 1fr] gap-4">

                    {/* Banner Section */}
                    <div className="bg-red-600 bg-[url(/testimibanner.jpg)] bg-cover h-[31.25rem] rounded-2xl grid place-items-center">
                        <div className="bg-white min-w-[18.75rem] sm:min-w-[18.75rem] md:min-w-[31.25rem] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                            <button className="bg-night text-white p-2 rounded-md">15% DISCOUNT</button>
                            <h2 className="font-extrabold text-2xl text-primary">Winter Collection</h2>
                            <p className="text-gray-500 text-[1.25rem]">Starting from €49 </p>
                            <button className="bg-night text-white p-2 rounded-md">SHOP NOW</button>
                        </div>
                    </div>

                    {/* Service and Customer Review Boxes */}
                    <div className="flex gap-6 pt-10">

                        {/* Customer Service Box */}
                        <div className="border border-gray-300 rounded-2xl shadow-xl grid place-items-center p-6 w-[30rem] lg:p-0">
                            <div className="text-center flex flex-col items-center gap-1 py-12">
                                <Image
                                    className="inline-block rounded-full"
                                    src="/testimonial776.jpeg"
                                    width={80}
                                    height={80}
                                    alt="Customer Picture"
                                />
                                <h2 className="font-black text-[1.25rem] text-primary">Moon Macintosh</h2>
                                <p>Customer Care</p>
                                <p className="max-w-[16.5rem] text-gray-500">
                                    We offer complete customer services. We have proven our commitment to the service sectors.
                                </p>
                            </div>
                        </div>

                        {/* Customer Review 1 */}
                        <div className="border border-gray-300 rounded-2xl shadow-xl grid place-items-center p-6 w-[30rem] lg:p-0">
                            <div className="text-center flex flex-col items-center gap-1 pt-2">
                                <Image
                                    className="inline-block rounded-full"
                                    src="/man_demo1.jpg"
                                    width={80}
                                    height={80}
                                    alt="Customer Picture"
                                />
                                <h2 className="font-black text-[1.25rem] text-primary">Mars Samrinun</h2>
                                <p>Helsinki</p>
                                <p className="max-w-[16.5rem] text-gray-500">
                                "Fantastic service! The team is always responsive and goes above and beyond to ensure customer satisfaction."
                                </p>
                            </div>
                        </div>

                        {/* Customer Review 2 */}
                        <div className="border border-gray-300 rounded-2xl shadow-xl grid place-items-center p-6 w-[30rem] lg:p-0">
                            <div className="text-center flex flex-col items-center gap-1 pt-2">
                                <Image
                                    className="inline-block rounded-full"
                                    src="/woman_demo1.jpg"
                                    width={80}
                                    height={80}
                                    alt="Customer Picture"
                                />
                                <h2 className="font-black text-[1.25rem] text-primary">Venus Earhing</h2>
                                <p>Copehagen</p>
                                <p className="max-w-[16.5rem] text-gray-500">
                                "The customer support is exceptional, and their commitment to excellent service is truly impressive."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewInfo
