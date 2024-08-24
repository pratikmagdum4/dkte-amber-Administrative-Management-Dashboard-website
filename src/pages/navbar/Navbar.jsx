import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../../assets';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth';

const Navbar = ({ links }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState('');
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const navigate = useNavigate();
    const timeoutRef = useRef(null);
    const dispatch = useDispatch();

    
    const handleClick = (label) => {
        if (activeDropdown === label && dropdownVisible) {
            setDropdownVisible(false);
            setActiveDropdown('');
        } else {
            setActiveDropdown(label);
            setDropdownVisible(true);
        }
    };

    const handleDropdownClick = (label, type) => {
        if (label === "Submit") {
            navigate(`/submit-${type}`);
        } else if (label === "Verify") {
            navigate(`/login/admin/home/verify-${type}`);
        } else if (label === "Display") {
            navigate(`/login/admin/home/display-${type}`);
        }
        setDropdownVisible(false); // Close the dropdown after navigation
    };

    const handleLogout = () => {
        dispatch(logOut());
        navigate("/"); // Redirect to the homepage or login page
        setDropdownVisible(false);
    };

    const renderDropdown = (label) => {
        if (label === "Logout") {
            return (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg z-10 animate-fade-in">
                    <button
                        className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            );
        }

        return (
            <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg z-10 animate-fade-in">
                <button
                    className="block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => handleDropdownClick(label, "article")}
                >
                    Article
                </button>
                <button
                    className="block w-full text-left px-4 py-2 hover:bg-green-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => handleDropdownClick(label, "image")}
                >
                    Image
                </button>
                <button
                    className="block w-full text-left px-4 py-2 hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => handleDropdownClick(label, "technical-article")}
                >
                    Technical Article
                </button>
            </div>
        );
    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white p-3 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="flex items-center space-x-4">
                <img
                    onClick={() => {
                        navigate("/");
                    }}
                    src={logo}
                    alt="Logo"
                    className="h-10 cursor-pointer transform hover:scale-110 transition-transform duration-300"
                />
                <span className="text-2xl font-bold tracking-wide">Ambar</span>
            </div>
            <div className="lg:hidden flex items-center">
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <div className={`lg:flex lg:space-x-6 lg:items-center ${mobileMenuVisible ? 'flex' : 'hidden'} flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent z-20 lg:z-auto`}>
                {links && links.map((link, index) => (
                    <div
                        key={index}
                        className="relative lg:inline-block"
                        onClick={['Submit', 'Verify', 'Display', 'Logout'].includes(link.label) ? () => handleClick(link.label) : () => navigate(link.url)}
                    >
                        <button className="block w-full text-left px-4 py-2 hover:text-yellow-300 lg:inline transition-all duration-300">
                            {link.label}
                        </button>
                        {dropdownVisible && activeDropdown === link.label && renderDropdown(link.label)}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;


