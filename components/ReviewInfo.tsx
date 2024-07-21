import Image from "next/image"


const ReviewInfo = () => {
    return (
        <>
            <div className="container pt-16 pb-16 grid-cols-2">
                <h2 className="font-medium text-2xl pb-4"></h2>
                <div className="grid lg:grid-cols-[18.75rem, 1fr] gap-4">
                    

                    <div className="bg-red-600 bg-[url(/testimibanner.jpg)] bg-cover h-[31.25rem] rounded-2xl
                            grid place-items-center">
                        <div className="bg-white min-w-[18.75rem] sm:min-w-[18.75rem] md:min-w-[31.25rem]
                                rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                            <button className="bg-night text-white p-2 rounded-md">15% DISCOUNT</button>
                            <h2 className="font-extrabold text-2xl text-primary">Winter Collection</h2>
                            <p className="text-gray-500 text-[1.25rem]">Starting from €49 </p>
                            <button className="bg-night text-white p-2 rounded-md">SHOP NOW</button>
                        </div>
                    </div>
                    {/* Service and customer review boxes */}
                    <div className="flex gap-6 pt-10 ">
                        <div className="border border-gray-300 rounded-2xl shadow-xl  grid place-items-center p-6 w-[30rem] lg:p-0">
                            <div className="text-center flex flex-col items-center gap-1 pt-2">
                                <Image
                                    className="inline-block rounded-full"
                                    src="/testimonial776.jpeg"
                                    width={80}
                                    height={80}
                                    alt="picpicture"
                                />
                                <h2 className="font-black text-[1.25rem] text-primary">Moon Macintosh</h2>
                                <p>Customer Care</p>                               
                                <p className="max-w-[16.5rem] text-gray-500">We offer complete customer services.We have proven our commitment to the service sectors </p>
                            </div>
                        </div>
                        {/* First Customer Review */}
                        <div className="border border-gray-300 rounded-2xl grid place-items-center shadow-xl p-6 w-[30rem] lg:p-0">
                            <div className="text-center flex flex-col items-center gap-1 pt-2">
                                <Image
                                    className="inline-block rounded-full"
                                    src="/testimonial776.jpeg"
                                    width={60}
                                    height={60}
                                    alt="picpicture"
                                />
                                <h2 className="font-black text-[1.25rem] text-primary">Venus Galaxy</h2>
                                <p>Customer Reviews</p>
                                <Image
                                    className="inline-block py-2 rounded-full"
                                    src="/testimonial776.jpeg"
                                    width={30}
                                    height={30}
                                    alt="picimage"
                                />
                                <p className="max-w-[16.5rem] text-gray-500">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amert </p>
                            </div>
                        </div>
                        {/* Second Customer Review */}
                        <div className="border border-gray-300 rounded-2xl grid place-items-center shadow-xl p-6 w-[30rem] lg:p-0">
                            <div className="text-center flex flex-col items-center gap-1 pt-2">
                                <Image
                                    className="inline-block rounded-full"
                                    src="/testimonial776.jpeg"
                                    width={60}
                                    height={60}
                                    alt="picpicture"
                                />
                                <h2 className="text-primary font-black text-[1.25rem]">Jupiter Universe</h2>
                                <p>Customer Review</p>
                                <Image
                                    className="inline-block py-2 rounded-full"
                                    src="/testimonial776.jpeg"
                                    width={30}
                                    height={30}
                                    alt="picimage"
                                />
                                <p className="max-w-[16.5rem] text-gray-500 pb-3">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amert </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewInfo