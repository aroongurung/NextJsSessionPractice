import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='flex justify-between items-center border-t border-gray-200 text-center px-16 pb-6 pt-4 h-[8rem] md:pb-4'>
            {/* Logo and Copyright -Left Section */}
            <div>
                <h1 className='text-[1.4rem]'>© {new Date().getFullYear()} 
                <Link href="/" className='font-bold text-4xl text-center pb-4 sm:pb-0 text-night ml-2' ><span className="text-primary">O</span>s<span className="text-primary">t</span>a</Link>
                </h1>
                <p>Aroon</p>
            </div>
            {/* Center section- all services */}
            <div className='text-night'>
                <p><Link href="/careers">Careers</Link></p>
                <p><Link href="/delivery">Delivery</Link></p>
                <p><Link href="/privacy">Privacy</Link></p>
                <p><Link href="/partners">Partners</Link></p>
                
            </div>
            <div>
                <p><Link href="/feedback">FeedBack</Link></p>
                <p><Link href="/internationaloffices">International OFFICES</Link></p>
                <p><Link href="/form">Contact Us</Link></p>
                
            </div>
        </div>
    </>
  )
}

export default Footer