import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Star, Award, Users, Calendar, Briefcase, List, Group, ArrowUpCircle } from 'lucide-react';

export default function ClerkLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const clerkLinks = [
        { label: 'Student Achievements', icon: <Star />, path: 'studentachievement' },
        { label: 'Faculty Achievements', icon: <Award />, path: 'facultyachievement' },
        { label: 'Club Reports', icon: <Users />, path: 'clubreports' },
        { label: 'Main Events', icon: <Calendar />, path: 'mainevents' },
        { label: 'Training & Placement', icon: <Briefcase />, path: 'placement' },
        { label: 'Sponsors List', icon: <List />, path: 'sponsorlist' },
        { label: 'Staff Members', icon: <Group />, path: 'staffmembers' },
        { label: 'Upgraduation', icon: <ArrowUpCircle />, path: 'upgraduation' },
    ];

    return (
        <div className="relative min-h-screen flex bg-white dark:bg-zinc-900">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-100 dark:bg-gray-800 border-r shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-40 w-64`}
            >
                <div className="flex justify-between items-center p-4">
                    <button
                        className="text-gray-600 dark:text-gray-300"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={24} />
                    </button>
                </div>
                <nav className="space-y-4">
                    {clerkLinks.map(({ label, icon, path }) => (
                        <button
                            key={path}
                            onClick={() => (window.location.href = `/login/clerk/deptlist/deptlogin/home/${path}`)}
                            className="flex items-center gap-3 bg-yellow-500 text-black py-2 px-4 rounded-lg w-full hover:bg-yellow-600"
                        >
                            {icon} {label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1">
                <header className="flex items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
                    <button
                        className="text-gray-600 dark:text-gray-300"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="ml-4 text-lg font-semibold">Clerk Dashboard</h1>
                </header>
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
