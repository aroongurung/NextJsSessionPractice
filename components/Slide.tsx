import Image from "next/image";


interface propsType {
    img: string;
    title: string;
    info: string;
    price: string;
}

const Slide: React.FC<propsType> = ({ img, title, info, price }) => {
    return (
        <>
            <div className="relative w-[100%] h-[30rem] ">
               
                    <div className="absolute left-[1.8rem] md:left-[4.38rem] max-w-[15.62rem] sm:max-w-[21.88rem]
                                    top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-white sm:bg-transparent p-4 sm:p-0
                                    rounded-lg sm:rounded-none">
                        <h3 className="text-primary text-[1.5rem] lg:text-[1.75rem]">{title}</h3>
                        <h2 className="text-night text-[1.6rem] md:text-[1.72rem] lg:text-[2.75rem] font-bold leading[1.2]">{info}</h2>
                        <h3 className="text-[1.5rem] text-gray-500"> Starting at {" "}
                            <b className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.88rem]">{price}</b>
                        </h3>
                        <div className="bg-primary text-white text-[0.88rem] md:text-[1rem] p-2 px-4 rounded-lg
                                    inline-block cursor-pointer hover:bg-night"> Shop Now</div>
                    </div>
                    <Image className="w-[100%] h-[19rem] md:min-h-[40rem] object-cover
                                md:object-left-bottom"
                        src={img}
                        alt="imagePic"
                        width={1000}
                        height={1000}
                    />
         
            </div>
        </>
    )
}

export default Slide