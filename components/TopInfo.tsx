import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";

const TopInfo = () => {
    return (
        <>
            <div className="border-b border-gray-300 hidden sm:block">
                <div className="container py-4">
                    <div className="flex justify-between items-center">
                        <div className="hidden lg:flex gap-1">
                            {/* SocialMedia Icons starts */}
                            <div className="iconwrapper">
                                <FaFacebook />
                            </div>
                            <div className="iconwrapper">
                                <FaInstagram />
                            </div>
                            <div className="iconwrapper">
                                <FaWhatsappSquare />
                                {/* SocialMedia Icons ends */}
                            </div>
                        </div>
                        {/*Top center Information Banner  */}
                        <div className="text-gray-500 text-[0.75rem]">
                            <b>Discount Upto 40%</b> | <span className="text-primary">FREE SHIPPING </span>order over €79
                        </div>
                        {/* Top DropDown Currency Section */}
                        <div className="flex gap-4">
                            <select className="text-gray-500 text-[0.75rem] w-[4.4rem] outline-night"
                                name="currency"
                                id="currency"
                            >
                                <option value="€ EUR">€ EUR</option>
                                <option value="$ USD">$ USD</option>
                                <option value="£ GBP">£ GBP</option>
                            </select>
                            {/* Top DropDown Language section */}
                            <select className="text-gray-500 text-[0.75rem] w-[5rem] outline-night"
                                name="language">
                                id= "language"
                                <option value="english">English</option>
                                <option value="finnish">Finnish</option>
                                <option value="swedish">Swedish</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopInfo