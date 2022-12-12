'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/logo.png';
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(false);
    const [showNav, setShowNav] = useState(true);

    return (
        <>
            <nav className="bg-white">
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo" width={100} height={100} />
                    {showNav && (
                        <>
                            <div className='w-full px-20 flex items-center justify-end md:justify-end lg:justify-between mt-0 py-2'>
                                <div className="block md:hidden lg:hidden pr-4 ml-5">
                                    <button
                                        className="flex items-center p-1 text-black hover:text-teal-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                        onClick={() => {
                                            setActiveTab(!activeTab);
                                        }}
                                    >
                                        <svg
                                            className="fill-current h-6 w-6"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Menu</title>
                                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="w-full hidden md:flex md:justify-between lg:flex lg:justify-between">
                                    <ul className="flex items-center">
                                        <li>
                                            <a href="#" className="block px-3 py-2 text-black font-semibold hover:bg-gray-400">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-3 py-2 text-black font-semibold hover:bg-gray-400">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-3 py-2 text-black font-semibold hover:bg-gray-400">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="flex items-center">
                                        <li>
                                            <a href="#" className="block px-3 py-2 text-black font-semibold hover:bg-gray-400">
                                                Sign In
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-3 py-2 text-black font-semibold hover:bg-gray-400">
                                                Sign Up
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className='w-full px-20 flex items-center justify-center mt-0 py-2'>

                    <CSSTransition
                        in={activeTab}
                        timeout={300}
                        classNames="tab"
                        unmountOnExit
                    >
                        <div className="block md:hidden lg:hidden">
                            <ul className="list-reset flex flex-col lg:flex justify-end flex-1 items-center gap-4">
                                <li>
                                    <a href="#" className="text-black font-semibold hover:text-gray-300">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-black font-semibold hover:text-gray-300">About</a>
                                </li>
                                <li>
                                    <a href="#" className="text-black font-semibold hover:text-gray-300">Contact</a>
                                </li>
                            </ul>
                            <ul className="flex items-center mt-12">
                                <li>
                                    <a href="#" className="block px-3 py-2 text-black font-semibold hover:bg-gray-400">
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-3 py-2 text-black font-semibold hover:bg-gray-400">
                                        Sign Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </CSSTransition>
                </div>

            </nav>
            <div className='border-none h-[2px] bg-gray-200 w-full'></div>
        </>
    )
}

export default Navbar