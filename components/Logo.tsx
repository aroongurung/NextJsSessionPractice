import { FiSearch, FiLogIn} from "react-icons/fi";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Logo = () => {
  return (
    <>
        <div className='border-b border-gray-200 py-6'>
            <div className='container sm:flex justify-between items-center'>
                {/* Logo Area */}
                <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-night'><Link href="/"><span className="text-primary">O</span>s<span className="text-primary">t</span>a</Link></div>
                <select className="text-gray-500 text-[0.75rem] w-[6.5rem] outline-night mr-3 ml-3 "
                    name= "city">
                    id= "city"
                    <option value="helsinki">HELSINKI</option>
                    <option value="copenhagen">COPENHAGEN</option>
                    <option value="singapore">KATHMANDU</option>
                </select>
                {/* Search Input field */}
                <div className='w-full sm:w-[18.75rem] md:w-[70%] relative'>
                    <input className='border-gray-200 border p-2 px-4 rounded-lg w-full outline-night' type="input" placeholder="Search your product" />
                {/* Search Icon */}
                    <FiSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20}/>
                </div>
                {/* User Icon */}
                <div className="items-center justify-center hidden lg:flex gap-4 text-gray-500 text-[1.6rem] ml-6 ">
                        <Link href="/user"><FaUser className="text-night cursor-pointer hover:text-primary" /></Link>
                    
                    {/* Heart Icon */}
                    <div className="relative">
                        <Link href="/user/favourite"><FaHeart className="text-night cursor-pointer hover:text-primary "/></Link>
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[1.12rem] h-[1.12rem]  text-[0.75rem]
                                text-white grid place-items-center translate-x-1 -translate-y-1]">0</div>
                    </div>
                    {/* Shopping Cart Icon  */}
                    <div className="relative">
                        <Link href="/shoppingcart"><FaShoppingCart className="text-night cursor-pointer hover:text-primary"/></Link>
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[1.12rem] h-[1.12rem]  text-[0.75rem]
                                text-white grid place-items-center translate-x-1 -translate-y-1]">0</div>
                    </div>
                    {/* Log In Button */}
                    <button className="bg-primary text-white cursor-pointer w-[5.6rem] h-[2.2rem] text-[1rem] border-2 rounded-xl px-2  hover:bg-night "><Link href="/signup">Log In</Link></button>
                    {/* Sign Up Button */}
                    <button className="bg-night text-white cursor-pointer w-[5.6rem] h-[2.2rem] text-[1rem] border-2 rounded-xl px-2  hover:bg-primary "><Link href="/signup">Sign Up</Link></button>
                </div>

            </div>

        </div>
    
    </>
  )
}

export default Logo