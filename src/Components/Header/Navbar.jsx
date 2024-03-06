/* eslint-disable react/prop-types */

import { useState } from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className={`rounded-lg bg-gray-800 shadow-lg'}`}>
            <div className="px-4">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <a href="#" className="text-white text-lg font-semibold">Logo</a>
                    </div>
                    <div className="flex items-center">
                        <label className="container relative w-6 h-6 mr-3 cursor-pointer">
                            <input type="checkbox" onClick={toggleTheme} checked={isDarkMode} className="absolute opacity-0 w-0 h-0" />
                            <span className="checkmark absolute top-0 left-0 w-full h-full bg-black rounded-full transition-all duration-200"></span>
                        </label>
                        <button className="text-white text-lg focus:outline-none" onClick={toggleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`rounded-lg fixed top-1 left-0 w-64 h-full bg-gray-800 transition-transform duration-500 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-10`}>
                <ul className="mt-4 text-white rounded-lg">
                    <li><a href="/" className="block py-2 px-4 hover:bg-gray-700 hover:rounded-full">Home</a></li>
                    <li><a href="/dev" className="block py-2 px-4 hover:bg-gray-700 hover:rounded-full">Contributors</a></li>
                    <li><a href="/Services" className="block py-2 px-4 hover:bg-gray-700 hover:rounded-full">Services</a></li>
                    <li><a href="/contact" className="block py-2 px-4 hover:bg-gray-700 hover:rounded-full">Contact</a></li>
                    <li><a href="/Notes" className="block py-2 px-4 hover:bg-gray-700 hover:rounded-full">Notes</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
