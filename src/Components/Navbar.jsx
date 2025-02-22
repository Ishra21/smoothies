import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link, useLocation } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(menuOpen ? false : true)
    }

    const pathname = useLocation()

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50">

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">

                        <Link to={"/"} className="flex-shrink-0 flex items-center">
                            <img className="h-14 md:h-20 w-auto" src={logo} alt="Smoothie Bar" />
                        </Link>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to={"/"} className={pathname === '/' ? "border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>Home</Link>
                            {/* <Link to={"/"} className="border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</Link> */}
                            <Link to={"/menu"} className={pathname === '/menu' ? "border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>Menu</Link>
                            <Link to={"/about"} className={pathname === '/about' ? "border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>About</Link>
                            <Link to={"/contact"} className={pathname === '/contact' ? "border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>Contact</Link>
                            {/* <Link to={"/menu"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Menu</Link> */}
                            {/* <Link to={"/about"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">About</Link> */}
                            {/* <Link to={"/contact"} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</Link> */}
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* <button className="bg-[#98D8AA] text-white !rounded-button px-6 py-2 font-medium hover:bg-opacity-90  transform hover:scale-105 transition-transform duration-300 shadow-lg">Order Now</button> */}
                        <button className="relative p-2 mx-4">
                            <Link to="/Cart">
                                <GiShoppingCart className="text-3xl" />
                    
                            </Link>
                        </button>

                    </div>
                </div>
            </div>

            <div className="absolute right-0 top-3 flex items-center sm:hidden md:hidden">
                {/* <!-- Mobile menu button--> */}
                <button
                    onClick={handleMenu}
                    type="button"
                    id="mobile-dropdown-button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="block h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={menuOpen ? "block md:hidden" : "hidden"} >
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link
                        to="/"
                        className="text-gray-300 bg-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"                     >
                        Home
                    </Link>
                    <Link
                        to="menu"
                        className="text-gray-300 bg-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Menu
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-300 bg-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"  >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-300 bg-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Contact
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar

