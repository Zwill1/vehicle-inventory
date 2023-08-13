import {useState} from 'react'

import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";

const Navigation = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <>
    <section className='nav-bg'>
        <div className="flex justify-between md:w-full h-14 w-10/12 mx-auto container items-center">
            <div>
                <h1 className='flex'>
                  <Link to='/' className='logo-link font-bold mr-4 text-2xl sm:text-3xl md:text-4xl uppercase text-black'>Car Dealership</Link>
                </h1>
            </div>
            <div>
              <ul className='hidden lg:flex pr-4'>
                <li className='p-4'>
                  <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='p-4'>
                  <a href="/#about" className='nav-link'>About</a>
                </li>
                <li className='p-4'>
                  <Link to='/car' className='nav-link'>New & Used Cars</Link>
                </li>
                {/* <li className='p-4'>
                  <Link to='/contact' className='nav-link'>Contact Us</Link>
                </li> */}
              </ul>
            </div>
            <div className='lg:hidden' onClick={handleClick}>
              {!nav ? <GiHamburgerMenu className='w-5' /> : <HiXMark className='w-5' />}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 lg:hidden z-50'}>
          <li className='border-b-2 border-zinc-300 w-full p-4'>
              <Link to='/' className='nav-link' onClick={handleClose}>Home</Link>
          </li>
          <li className='border-b-2 border-zinc-300 w-full p-4'>
              <a href='/#about' className='nav-link' onClick={handleClose}>About</a>
          </li>
          <li className='border-b-2 border-zinc-300 w-full p-4'>
              <Link to='/car' className='nav-link' onClick={handleClose}>New & Used Cars</Link>
          </li>
          {/* <li className='border-b-2 border-zinc-300 w-full p-4'>
              <Link to='/contact' className='nav-link' onClick={handleClose}>Contact Us</Link>
          </li> */}
        </ul>
    </section>
    </>
  )
}

export default Navigation