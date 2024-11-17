import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <div className='container'>
          <div className='flex w-fit gap-10 mx-auto font-semibold  text-[1.2rem] py-4 text-night'>
            <Link href="/" className='navbarlink relative'>HOME</Link>
            <Link href="/" className='navbarlink relative'>LATEST</Link>
            <Link href="/" className='navbarlink relative'>ELECTRONICS</Link>
            <Link href="/" className='navbarlink relative'>FASHION</Link>
            <Link href="/" className='navbarlink relative'>ADVENTURES</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar