import React,{ use, useState, useEffect } from "react";
import { MenuLinks } from "../Utils/data";
import { Link } from "react-scroll";

import cvFile from '../assets/ICT 22 862_LGM Kavinda_Multimedia Technology.pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            }else{
                setIsOpen(false);
            }
        };

        // set initial state based on screen size.
        handleResize();

        // listening on resize event.
        window.addEventListener('resize', handleResize);

        // cleanup listner on component unmount
        return() => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <nav className="container mx-auto sticky top-5 z-10">
            <div className="flex item-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
                {/* Link */}
                <a href="#" className="flex items-center text-2xl font-bold pl-4"> <span className="text-[#f6a64f]">Madusha</span><span className="text-[#b56141]">KV</span></a>
                {/* Hamburger Icon */}
                <button className="block md:hidden text-[#333] mr-6 focus:outline-none" onClick={toggleMenu}>
                    <svg
                    className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) :(
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />)}
                    </svg>
                </button>
                {/* Nav Links */}
                <ul className={`flex ${isOpen ? "flex" : "hidden"} menu-wrapper`}>
                    {MenuLinks.map((item) => (
                        <li key={item.id}>
                            <Link 
                                to={item.link}
                                activeClass="active"
                                smooth spy offset={-70}
                                className="menu-item"
                            >
                            {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/*Hire Me Button*/}
                <button onClick={() => {const link = document.createElement('a');
                                        link.href = cvFile;
                                        link.download = 'ICT 22 862_LGM Kavinda_Multimedia Technology.pdf';
                                        link.click();
                                        }} className="hidden md:block h-12 text-[15px] font-medium text-white bg-[linear-gradient(to_right,#f6a64f,#b56141)]
                rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">Download CV</button>
            </div>
        </nav>
    );
}

export default Navbar;