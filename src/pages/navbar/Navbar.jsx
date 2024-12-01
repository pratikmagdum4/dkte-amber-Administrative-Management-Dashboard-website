import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth";
import { getClerkOptions } from "../../components/variables/variables";

const Navbar = ({ links, IsClerk }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [clerkDropdownVisible, setClerkDropdownVisible] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
        navigate("/");
        setDropdownVisible(false);
    };

    const clerkOptions = getClerkOptions(navigate);

    const Dropdown = ({ label, options }) => (
        <div className="relative group">
            <button className="block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300">
                {label}
            </button>
            <div className="absolute left-full top-0 mt-0 bg-white text-black rounded-lg shadow-lg z-10 hidden group-hover:block">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        className="block px-4 text-10  w-60 py-2 hover:bg-yellow-500 hover:text-white rounded-lg transition-all duration-300"
                        onClick={option.action}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );

    const renderClerkDropdown = () => (
        <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg z-10 animate-fade-in">
            {clerkOptions.map((category, idx) => (
                <Dropdown key={idx} label={category.label} options={category.subOptions} />
            ))}
        </div>
    );

    return (
        <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white p-3 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="flex items-center space-x-4">
                <img
                    onClick={() => navigate("/")}
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
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                className={`lg:flex lg:space-x-6 lg:items-center ${mobileMenuVisible ? "flex" : "hidden"
                    } flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent z-20 lg:z-auto`}
            >
                {IsClerk && (
                    <div className="relative lg:inline-block">
                        {clerkDropdownVisible && renderClerkDropdown()}
                        <button
                            className="block w-full text-left px-2 py-2 hover:text-yellow-300 lg:inline transition-all duration-300"
                            onClick={() => setClerkDropdownVisible(!clerkDropdownVisible)}
                        >
                            Clerk Categories
                        </button>
                    </div>
                )}
                {links.map((link, index) => (
                    <div
                        key={index}
                        className="relative lg:inline-block"
                        onClick={() => navigate(link.url)}
                    >
                        <button className="block w-full text-left px-2 py-2 hover:text-yellow-300 lg:inline transition-all duration-300">
                            {link.label}
                        </button>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
