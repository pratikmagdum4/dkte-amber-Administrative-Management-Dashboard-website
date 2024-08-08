import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../pages/navbar/Navbar';
import { FacultyAchivements } from '../../components/variables/variables';
import { Groupdiscussionbro1 } from '../../assets';

const ClerkLoginDepartmentListingComponent = ({ title }) => {
    const navigate = useNavigate();
    const [visibleDepts, setVisibleDepts] = useState(null);

    const buttonNames = [
        { id: 1, label: 'BTech Engineering', options: ["CSE", "CSE-AIML", "AIDS", "ENTC", "ELEC", "MECH", "CIVIL"] },
        { id: 2, label: 'BTech Textile', options: ["TT", "MMTT", "FT", "TC"] },
        { id: 3, label: 'Diploma', options: ["Diploma"] },
        { id: 4, label: 'MBA', options: ["MBA"] }
    ];

    const handleClick = (option) => {
        navigate(`/login/clerk/deptlist/deptlogin`, { state: { department: option } });
    };

    const handleToggleDepts = (id) => {
        setVisibleDepts((prev) => (prev === id ? null : id));
    };

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900">
            <Navbar links={FacultyAchivements} />
            <main className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-bold mb-8">{title}</h1>
                <div className="space-y-4 w-full max-w-md">
                    {buttonNames.map((btnName) => (
                        <div key={btnName.id}>
                            <button
                                className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full"
                                onClick={() => handleToggleDepts(btnName.id)}
                            >
                                {btnName.label}
                            </button>
                            {visibleDepts === btnName.id && (
                                <div className="mt-2 space-y-2">
                                    {btnName.options.map((option, index) => (
                                        <button
                                            key={index}
                                            className="bg-blue-500 text-white py-1 px-2 rounded-lg w-full"
                                            onClick={() => handleClick(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <img src={Groupdiscussionbro1} alt="" />
        </div>
    );
};

export default ClerkLoginDepartmentListingComponent;
