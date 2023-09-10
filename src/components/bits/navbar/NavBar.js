import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import "../navbar/NavBar.css"

const NavBar = () => {
    
    const [ click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
    <div className='fixed w-full bg-transparent md:rounded-b'>
        <nav className=' flex px-4 border-b md:shadow-md items-center relative justify-between bg-white max-w-full mx-5 md:rounded-b bg-gradient-to-l from-blue-700 tracking-wide uppercase'>
            <div className=' text-lg font-bold md:py-0 py-4 text-black'>
                <img src='#' alt='logo' className=' w-60 h-auto hover:cursor-pointer' />
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />) 
                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
            </div>
            <div className={click ? "" :'md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 flex h-auto'}>
                <Link to="/" className="flex md:inline-flex p-5 items-center text-slate-50 hover:border-b-2 hover:border-white font-medium hover:cursor-pointer hover:text-white focus:text-white focus:border-white focus:border-b-2 tracking-wide" onClick={closeMenu}>  
                    <span>Home</span>
                </Link>
        
                <Link className="relative parent hover:cursor-default">
                    <div className='flex justify-between md:inline-flex p-5 items-center space-x-2 font-medium  hover:text-white text-slate-50 focus:text-white focus:border-white focus:border-b-2 tracking-wide'>
                        <span>Who We Are</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                    </div>
                
                    <div className='child transition duration-300 md:absolute top-full md:w-48 bg-white md:shadow-lg md:rounded-b'>
                        <Link to="/bio" className='flex px-5 py-3 hover:bg-blue-100'>
                            About Us
                        </Link>
                        <Link to="/history" className='flex px-5 py-3 hover:bg-blue-100'>
                            Our History
                        </Link>
                        <Link to="/pastor" className='flex px-5 py-3 hover:bg-blue-100'>
                            Meet The Pastor
                        </Link>
                    </div>
                </Link>
        
                <Link to="/ministries" className="flex md:inline-flex p-5 items-center text-slate-50 hover:border-b-2 hover:border-white font-medium hover:cursor-pointer  hover:text-white focus:text-white focus:border-white focus:border-b-2 tracking-wider" onClick={closeMenu}>
                    <span>Ministries</span>
                </Link>
        
                <Link to="/services" className="flex md:inline-flex p-5 items-center text-slate-50 hover:border-b-2 hover:border-white font-medium hover:cursor-pointer hover:text-white focus:text-white focus:border-white focus:border-b-2 tracking-wider" onClick={closeMenu}>
                    <span>Services</span>
                </Link>
        
                <Link to="/contact-us" className="flex md:inline-flex p-5 items-center text-slate-50 hover:border-b-2 hover:border-white font-medium hover:cursor-pointer hover:text-white focus:text-white focus:border-white focus:border-b-2 tracking-wider" onClick={closeMenu}>
                    <span>Contact Us</span>
                </Link>
            </div>
            {/* <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </div> */}
        </nav>
    </div>
  )
}

export default NavBar