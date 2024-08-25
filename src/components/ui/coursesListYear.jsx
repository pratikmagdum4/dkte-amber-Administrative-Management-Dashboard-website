import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../pages/navbar/Navbar';
import { FacultyAchivements } from '../variables/variables';
import { Groupdiscussionbro1 } from '../../assets';

const CourseListingComponent = ({ buttonNames, url, title, visibleYears, handleToggleYears }) => {
    const navigate = useNavigate();

    const handleClick = (option) => {
        navigate(`/login/clerk/deptlist/deptlogin/home/studentachievement/course-list${option}`);
    };

    return (
        <>
        <div className="min-h-screen bg-white dark:bg-zinc-900 mt-4">
            <Navbar links={FacultyAchivements} />

            <main className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-bold mb-8">{title}</h1>
                <div className="space-y-4 w-full max-w-md">
                    {buttonNames.map((btnName) => (
                        <div key={btnName.id}>
                            <button
                                className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full"
                                onClick={() => handleToggleYears(btnName.id)}
                            >
                                {btnName.label}
                            </button>
                            {visibleYears === btnName.id && (
                                <div className="mt-2 space-y-2">
                                    {Array.from({ length: btnName.years }, (_, i) => (
                                        <button
                                            key={i}
                                            className="bg-blue-500 text-white py-1 px-2 rounded-lg w-full"
                                            onClick={() => handleClick(`${btnName.option}/year${i + 1}`)}
                                        >
                                            Year {i + 1}
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
         
       </>
    );
};

export default CourseListingComponent;
