import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="container mx-auto px-6 py-8 border-t border-gray-200">
      <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:items-center sm:place-items-center sm:mb-1">
        {/* Logo and Copyright - Left Section */}
        <div className="text-center flex justify-center items-center gap-2 sm:text-left">
          <h1 className="text-xl sm:text-2xl font-semibold">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="font-bold text-4xl text-night ml-2">
              <span className="text-primary">O</span>s<span className="text-primary">t</span>a
            </Link>
          </h1>
          <p className="text-gray-600 mt-2 ">Aroon</p>
        </div>

        {/* Center Section - All Services */}
        <div className="text-center sm:text-left">
          <p><Link href="/careers" className="text-gray-600 hover:text-primary">Careers</Link></p>
          <p><Link href="/delivery" className="text-gray-600 hover:text-primary">Delivery</Link></p>
          <p><Link href="/privacy" className="text-gray-600 hover:text-primary">Privacy</Link></p>
          <p><Link href="/partners" className="text-gray-600 hover:text-primary">Partners</Link></p>
        </div>

        {/* Right Section - Feedback & Contact */}
        <div className="text-center sm:text-left">
          <p><Link href="/feedback" className="text-gray-600 hover:text-primary">Feedback</Link></p>
          <p><Link href="/internationaloffices" className="text-gray-600 hover:text-primary">International Offices</Link></p>
          <p><Link href="/form" className="text-gray-600 hover:text-primary">Contact Us</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
