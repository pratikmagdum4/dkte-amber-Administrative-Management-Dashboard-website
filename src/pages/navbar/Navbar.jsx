import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentRole } from "../../redux/auth";

const Navbar = ({ links }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState("");
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const navigate = useNavigate();
    const timeoutRef = useRef(null);
    const dispatch = useDispatch();
    const role = useSelector(selectCurrentRole);

    const toggleDropdown = (label) => {
        console.log("The label is", label)
        setActiveDropdown((prev) => (prev === label ? "" : label));
        setDropdownVisible((prev) => (activeDropdown !== label ? true : !prev));
        console.log("The activeDropdown is ", activeDropdown)
    };

    const handleClick = (label) => {
        if (activeDropdown === label && dropdownVisible) {
            setDropdownVisible(false);
            setActiveDropdown("");
        } else {
            setActiveDropdown(label);
            setDropdownVisible(true);
        }
    };

    const handleDropdownClick = (label, type) => {
        if (label === "Submit") {
            navigate(`/submit-${type}`);
        } else if (label === "Verify" && role === "admin") {
            navigate(`/login/admin/home/verify-${type}`);
        } else if (label === "Display" && role === "admin") {
            navigate(`/login/admin/home/display-${type}`);
        } else if (label === "Verify" && role === "faculty") {
            navigate(`/login/co-faculty/verify-${type}`);
        } else if (label === "Display" && role === "faculty") {
            navigate(`/login/co-faculty/display-${type}`);
        }
        setDropdownVisible(false); // Close the dropdown after navigation
    };

    const handleLogout = () => {
        dispatch(logOut());
        navigate("/"); // Redirect to the homepage or login page
        setDropdownVisible(false);
    };

    const renderSubDropdown = (items) => (
        <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg z-10">
            {items.map((item) => (
                <button
                    key={item.label}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition-all"
                    onClick={() => navigate(item.url)}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );

    const renderClerkDropdown = () => (
        <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg z-10">
            <div className="relative">
                <button
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-gray-200 rounded-lg transition-all"
                    onClick={() => navigate("/login/clerk/deptlist/deptlogin/home/studentachievement")}
                >
                    Student Achievements
                </button>
            </div>
            <div className="relative">
                <button
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-gray-200 rounded-lg transition-all"
                    onClick={() => navigate("/login/clerk/deptlist/deptlogin/home/facultyachievement")}
                >
                    Faculty Achievements
                </button>
            </div>
            <div className="relative">
                <button
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-gray-200 rounded-lg transition-all"
                    onClick={() => navigate("/login/clerk/deptlist/deptlogin/home/clubreports")}
                >
                    Club Reports
                </button>
            </div>
            <div className="relative">
                <button
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-gray-200 rounded-lg transition-all"
                    onClick={() => navigate("/login/clerk/deptlist/deptlogin/home/mainevents")}
                >
                    Main Events
                </button>
            </div>
            <div className="relative">
                <button
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-gray-200 rounded-lg transition-all"
                    onClick={() => navigate("/login/clerk/deptlist/deptlogin/home/placement")}
                >
                    Reports on Training & Placement Activities
                </button>
            </div>
            <div className="relative">
                <button
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-gray-200 rounded-lg transition-all"
                    onClick={() => navigate("/login/clerk/deptlist/deptlogin/home/sponsorslist")}
                >
                    Sponsors List
                </button>
            </div>
            <div className="relative">
                <button
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-gray-200 rounded-lg transition-all"
                    onClick={() => navigate("/login/clerk/deptlist/deptlogin/home/staffmembers")}
                >
                    Staff Members
                </button>
            </div>
            <div className="relative">
                <button
                    className="block w-full text-left px-4 py-2 font-bold hover:bg-gray-200 rounded-lg transition-all"
                    onClick={() => navigate("/login/clerk/deptlist/deptlogin/home/upgraduation")}
                >
                    Upgraduation
                </button>
            </div>

        </div>
    );

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
                    Non-Technical Articles/Poems
                </button>
                <button
                    className="block w-full text-left px-4 py-2 hover:bg-green-500 hover:text-white rounded-lg transition-all duration-300"
                    onClick={() => handleDropdownClick(label, "image")}
                >
                    Sketch/Photograph
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
            {/* Logo */}
            <div className="flex items-center space-x-4">
                <img
                    onClick={() => navigate("/")}
                    src={logo}
                    alt="Logo"
                    className="h-10 cursor-pointer transform hover:scale-110 transition-transform duration-300"
                />
                <span className="text-2xl font-bold tracking-wide">Ambar</span>
            </div>

            {/* Mobile Menu */}
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

            {/* Links */}
            <div
                className={`lg:flex lg:space-x-6 lg:items-center ${mobileMenuVisible ? "flex" : "hidden"
                    } flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent z-20 lg:z-auto`}
            >
                {role === "clerk" && (<>
                    <div className="relative">
                        <button
                            className="block w-full text-left px-2 py-2 hover:text-yellow-300 lg:inline transition-all"
                            onClick={() => toggleDropdown("Clerk Section")}
                        >
                            Clerk Section
                        </button>


                        {activeDropdown === "Clerk Section" && renderClerkDropdown()}
                    </div>
                    <div>
                        < button
                            className="block w-full text-left  hover:text-yellow-300 lg:inline transition-all duration-300"
                            onClick={() => {
                                navigate('/login/clerk/deptlist/deptlogin/home/')
                            }}
                        >
                            Clerk Home
                        </button>
                    </div>
                </>
                )}

                {links.map((link, index) => (
                    <div key={index} className="relative">
                        {role !== "ra" && link.label !== "Login" && link.label !== "SignUp" &&
                            < button
                                className="block w-full text-left px-2 py-2 hover:text-yellow-300 lg:inline transition-all duration-300"
                                onClick={
                                    ["Submit", "Verify", "Display", "Logout", "Section"].includes(
                                        link.label
                                    )
                                        ? () => handleClick(link.label)
                                        : () => navigate(link.url)
                                }
                            >
                                {link.label}
                            </button>
                        }
                        {dropdownVisible && activeDropdown === link.label && renderDropdown(link.label)}

                    </div>
                ))}

            </div>
        </nav >
    );
};

export default Navbar;
