import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Menu, X, Star, Award, Users, Calendar, Briefcase, List, Group, ArrowUpCircle } from 'lucide-react';

const ClerkSidebarHome = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState({}); // State for tracking dropdown visibility

    // Handle navigation and dropdown toggle
    const handleDropdownToggle = (key) => {
        setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleNavigation = (path) => {
        navigate(`/login/clerk/deptlist/deptlogin/home/${path}`);
    };

    return (
        <div className="min-h-screen pt-10  bg-white dark:bg-zinc-900">
            {/* Horizontal Navbar */}
            <nav className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 shadow">
                <div className="flex items-center space-x-4">
                    <Menu size={24} className="text-gray-600 dark:text-gray-300" />
                    <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">Clerk Navigation</h1>
                </div>
                <ul className="flex items-center space-x-6">
                    {/* Dropdown Menu Items */}
                    <li className="relative">
                        <button
                            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-yellow-500"
                            onClick={() => handleDropdownToggle('achievements')}
                        >
                            <Star /> Achievements
                        </button>
                        {dropdownOpen['achievements'] && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow rounded">
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => handleNavigation('studentachievement')}
                                >
                                    Student Achievements
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => handleNavigation('facultyachievement')}
                                >
                                    Faculty Achievements
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="relative">
                        <button
                            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-yellow-500"
                            onClick={() => handleDropdownToggle('reports')}
                        >
                            <Users /> Reports
                        </button>
                        {dropdownOpen['reports'] && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow rounded">
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => handleNavigation('clubreports')}
                                >
                                    Club Reports
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => handleNavigation('mainevents')}
                                >
                                    Main Events
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="relative">
                        <button
                            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-yellow-500"
                            onClick={() => handleDropdownToggle('placement')}
                        >
                            <Briefcase /> Placement
                        </button>
                        {dropdownOpen['placement'] && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow rounded">
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => handleNavigation('placement')}
                                >
                                    Training & Placement
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => handleNavigation('sponsorlist')}
                                >
                                    Sponsors List
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="relative">
                        <button
                            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-yellow-500"
                            onClick={() => handleDropdownToggle('staff')}
                        >
                            <Group /> Staff
                        </button>
                        {dropdownOpen['staff'] && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow rounded">
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => handleNavigation('staffmembers')}
                                >
                                    Staff Members
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => handleNavigation('upgraduation')}
                                >
                                    Upgraduation
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default ClerkSidebarHome;
