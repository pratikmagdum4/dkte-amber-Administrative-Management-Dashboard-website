import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'; // Outlet for nested routes
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { Menu, X, Star, Award, Users, Calendar, Briefcase, List, Group, ArrowUpCircle } from 'lucide-react';

const ClerkSidebarHome = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true); // State to track sidebar visibility

    function handleClick(option) {
        setSidebarOpen(false); // Close sidebar on navigation for mobile usability
        navigate(`/login/clerk/deptlist/deptlogin/home/${option}`);
    }

    return (
        <div className="min-h-screen py-20 flex bg-white dark:bg-zinc-900">
            {/* Sidebar */}
            <aside
                className={`fixed md:static bg-gray-100 dark:bg-gray-800 border-r h-full transition-all transform ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-20'
                    } z-30`}
            >
                <div className="flex justify-between items-center p-4">
                    {/* <h2 className={`text-lg font-bold ${sidebarOpen ? 'block' : 'hidden md:block'}`}>Clerk Navigation</h2> */}
                    <button
                        className="text-gray-600 dark:text-gray-300"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <nav className="space-y-4">
                    <button
                        className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        onClick={() => handleClick('studentachievement')}
                    >
                        <Star /> {sidebarOpen && 'Student Achievements'}
                    </button>
                    <button
                        className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        onClick={() => handleClick('facultyachievement')}
                    >
                        <Award /> {sidebarOpen && 'Faculty Achievements'}
                    </button>
                    <button
                        className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        onClick={() => handleClick('clubreports')}
                    >
                        <Users /> {sidebarOpen && 'Club Reports'}
                    </button>
                    <button
                        className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        onClick={() => handleClick('mainevents')}
                    >
                        <Calendar /> {sidebarOpen && 'Main Events'}
                    </button>
                    <button
                        className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        onClick={() => handleClick('placement')}
                    >
                        <Briefcase /> {sidebarOpen && 'Training & Placement'}
                    </button>
                    <button
                        className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        onClick={() => handleClick('sponsorlist')}
                    >
                        <List /> {sidebarOpen && 'Sponsors List'}
                    </button>
                    <button
                        className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        onClick={() => handleClick('staffmembers')}
                    >
                        <Group /> {sidebarOpen && 'Staff Members'}
                    </button>
                    <button
                        className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        onClick={() => handleClick('upgraduation')}
                    >
                        <ArrowUpCircle /> {sidebarOpen && 'Upgraduation'}
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 p-8 transition-all ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
                <Navbar links={ClerkNavLink} />
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Clerk Home</h1>
                    <button
                        className="md:hidden text-gray-600 dark:text-gray-300"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <Outlet /> {/* Displays the content of the selected category */}
            </div>
        </div>
    );
};

export default ClerkSidebarHome;
