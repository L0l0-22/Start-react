import { NavLink } from "react-router-dom";

export function Navbar(){
    return(
        <>
        <nav className="bg-[#2c3e50] p-3 sticky w-full top-0 left-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
        <div>
            <NavLink to='/' className="text-white text-2xl font-bold">START REACT</NavLink>
        </div>
        <div className="absolute  right-0 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
            <NavLink to='/portfolio' className=" px-3 py-2 font-bold text-xl text-gray-300 hover:text-[#1abc9c]" >Portfolio</NavLink>
            <NavLink to='/about' className=" px-3 py-2 text-xl font-bold text-gray-300 hover:text-[#1abc9c]">About</NavLink>
            <NavLink to='/contact' className=" px-3 py-2 font-bold text-xl text-gray-300 hover:text-[#1abc9c]">Contact</NavLink>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
        <NavLink to='/portfolio' className="block px-3 py-2 text-base font-bold text-gray-300 hover:text-[#1abc9c]">Portfolio</NavLink>
        <NavLink to='/about' className="block px-3 py-2 text-base font-bold  text-gray-300 hover:text-[#1abc9c]">About</NavLink>
        <NavLink to='/contact' className="block  px-3 py-2 text-base font-bold  text-gray-300 hover:text-[#1abc9c]">Contact</NavLink>
    </div>
    </div>
        </nav>
        </>
    )
}

