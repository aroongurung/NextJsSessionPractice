import { TfiMenu } from "react-icons/tfi";
import { FaShoppingBag } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

const MobileInterface = () => {
    return (
        <>
            <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%]
                max-w-[31.25rem] px-8'>
                <div className='flex justify-between text-[1.80rem] py-2'>
                    <TfiMenu />
                    <div className="relative">
                        <FaShoppingBag />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0
                            w-[1.12rem] h-[1.12rem] text-[0.85rem] text-white grid place-items-center
                            translate-x-1 -translate-y-1">0</div>
                    </div>
                    <IoHomeOutline />
                    <div className="relative">
                        <FaHeart />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0
                            w-[1.12rem] h-[1.12rem] text-[0.85rem] text-white grid place-items-center
                            translate-x-1 -translate-y-1">
                            0
                        </div>
                    </div>
                    <AiOutlineAppstore />

                </div>

            </div>
        </>
    )
}

export default MobileInterface